// Leitura de GLB/STL, separação em componentes e estatísticas — só para análise offline.
const fs = require('fs'), path = require('path');

function readGLB(file) {
  const b = fs.readFileSync(file);
  const jl = b.readUInt32LE(12), j = JSON.parse(b.slice(20, 20 + jl).toString());
  const binStart = 20 + jl + 8, bin = b.slice(binStart);
  const acc = i => { const a = j.accessors[i], v = j.bufferViews[a.bufferView], off = (v.byteOffset || 0) + (a.byteOffset || 0);
    const n = { VEC3: 3, SCALAR: 1, VEC2: 2, VEC4: 4 }[a.type] * a.count;
    const ab = bin.buffer.slice(bin.byteOffset + off, bin.byteOffset + off + n * (a.componentType === 5126 || a.componentType === 5125 ? 4 : 2));
    return a.componentType === 5126 ? new Float32Array(ab) : a.componentType === 5125 ? new Uint32Array(ab) : new Uint16Array(ab); };
  // matrizes de mundo
  const mul = (a, b) => { const o = new Array(16).fill(0); for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) for (let k = 0; k < 4; k++) o[c*4 + r] += a[k*4 + r] * b[c*4 + k]; return o; };
  const local = n => { if (n.matrix) return n.matrix; const t = n.translation || [0,0,0], q = n.rotation || [0,0,0,1], s = n.scale || [1,1,1];
    const [x, y, z, w] = q; return [ (1-2*(y*y+z*z))*s[0], 2*(x*y+z*w)*s[0], 2*(x*z-y*w)*s[0], 0, 2*(x*y-z*w)*s[1], (1-2*(x*x+z*z))*s[1], 2*(y*z+x*w)*s[1], 0, 2*(x*z+y*w)*s[2], 2*(y*z-x*w)*s[2], (1-2*(x*x+y*y))*s[2], 0, t[0], t[1], t[2], 1 ]; };
  const out = [];
  const walk = (ni, m) => { const n = j.nodes[ni], w = mul(m, local(n));
    if (n.mesh != null) for (const p of j.meshes[n.mesh].primitives) {
      const pos = acc(p.attributes.POSITION), idx = p.indices != null ? acc(p.indices) : null;
      const P = new Float32Array(pos.length);
      for (let i = 0; i < pos.length; i += 3) { const x = pos[i], y = pos[i+1], z = pos[i+2];
        P[i] = w[0]*x + w[4]*y + w[8]*z + w[12]; P[i+1] = w[1]*x + w[5]*y + w[9]*z + w[13]; P[i+2] = w[2]*x + w[6]*y + w[10]*z + w[14]; }
      const mat = j.materials[p.material]; const col = mat.pbrMetallicRoughness?.baseColorFactor || [1,1,1,1];
      out.push({ pos: P, idx: idx ? Uint32Array.from(idx) : Uint32Array.from({ length: P.length/3 }, (_, i) => i), color: col, matName: mat.name }); }
    (n.children || []).forEach(c => walk(c, w)); };
  const I = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
  j.scenes[j.scene || 0].nodes.forEach(n => walk(n, I));
  return { json: j, prims: out };
}

function readSTL(file) {
  const b = fs.readFileSync(file);
  const n = b.readUInt32LE(80);
  if (84 + n*50 !== b.length) throw new Error('STL ASCII não suportado: ' + file);
  const P = new Float32Array(n*9);
  for (let t = 0; t < n; t++) for (let k = 0; k < 9; k++) P[t*9 + k] = b.readFloatLE(84 + t*50 + 12 + k*4);
  return P; // triângulos soltos
}

// solda vértices por posição e devolve {pos, idx}
function weld(P, idx, q = 1000) {
  const map = new Map(), pos = [], out = new Uint32Array(idx ? idx.length : P.length/3);
  const N = idx ? idx.length : P.length/3;
  for (let i = 0; i < N; i++) { const v = idx ? idx[i] : i, x = P[v*3], y = P[v*3+1], z = P[v*3+2];
    const k = Math.round(x*q) + ',' + Math.round(y*q) + ',' + Math.round(z*q); let id = map.get(k);
    if (id === undefined) { id = pos.length/3; map.set(k, id); pos.push(x, y, z); } out[i] = id; }
  return { pos: Float32Array.from(pos), idx: out };
}

// componentes conectados de uma malha soldada
function components(m) {
  const n = m.pos.length/3, par = Int32Array.from({ length: n }, (_, i) => i);
  const f = x => { while (par[x] !== x) { par[x] = par[par[x]]; x = par[x]; } return x; };
  for (let t = 0; t < m.idx.length; t += 3) { const a = f(m.idx[t]); par[f(m.idx[t+1])] = a; par[f(m.idx[t+2])] = a; }
  const groups = new Map();
  for (let t = 0; t < m.idx.length; t += 3) { const k = f(m.idx[t]); let g = groups.get(k); if (!g) groups.set(k, g = []); g.push(t/3); }
  return [...groups.values()].map(tris => {
    const remap = new Map(), pos = [], idx = new Uint32Array(tris.length*3);
    tris.forEach((t, i) => { for (let k = 0; k < 3; k++) { const v = m.idx[t*3 + k]; let id = remap.get(v);
      if (id === undefined) { id = pos.length/3; remap.set(v, id); pos.push(m.pos[v*3], m.pos[v*3+1], m.pos[v*3+2]); } idx[i*3 + k] = id; } });
    return { pos: Float32Array.from(pos), idx };
  });
}

function stats(m) {
  const mn = [1e9,1e9,1e9], mx = [-1e9,-1e9,-1e9];
  for (let i = 0; i < m.pos.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], m.pos[i+k]); mx[k] = Math.max(mx[k], m.pos[i+k]); }
  // área e volume (divergência)
  let area = 0, vol = 0; const p = m.pos, ix = m.idx;
  for (let t = 0; t < ix.length; t += 3) { const a = ix[t]*3, b = ix[t+1]*3, c = ix[t+2]*3;
    const ux = p[b]-p[a], uy = p[b+1]-p[a+1], uz = p[b+2]-p[a+2], vx = p[c]-p[a], vy = p[c+1]-p[a+1], vz = p[c+2]-p[a+2];
    const cx = uy*vz - uz*vy, cy = uz*vx - ux*vz, cz = ux*vy - uy*vx; area += Math.hypot(cx, cy, cz)/2;
    vol += (p[a]*(p[b+1]*p[c+2] - p[b+2]*p[c+1]) - p[a+1]*(p[b]*p[c+2] - p[b+2]*p[c]) + p[a+2]*(p[b]*p[c+1] - p[b+1]*p[c]))/6; }
  const size = mx.map((v, k) => v - mn[k]);
  return { tris: ix.length/3, verts: p.length/3, min: mn, max: mx, size, center: mn.map((v, k) => (v + mx[k])/2), area, vol: Math.abs(vol), dims: [...size].sort((a, b) => b - a) };
}
module.exports = { readGLB, readSTL, weld, components, stats };
