// Sondagem da geometria do modelo de montagem: raios contra peças e corte de uma peça por um plano X.
const fs = require('fs');
const b = fs.readFileSync(process.argv[2]);
const jl = b.readUInt32LE(12), j = JSON.parse(b.slice(20, 20 + jl)), bin = b.slice(28 + jl);
const get = name => { const n = j.nodes.find(n => n.name === name), pr = j.meshes[n.mesh].primitives[0];
  const acc = i => { const a = j.accessors[i], v = j.bufferViews[a.bufferView], o = v.byteOffset || 0, cnt = a.count*(a.type === 'VEC3' ? 3 : 1);
    return a.componentType === 5126 ? new Float32Array(bin.buffer.slice(bin.byteOffset + o, bin.byteOffset + o + cnt*4)) : new Uint32Array(bin.buffer.slice(bin.byteOffset + o, bin.byteOffset + o + cnt*4)); };
  return { P: acc(pr.attributes.POSITION), I: acc(pr.indices) }; };
function ray(names, o, d) {
  let best = 1e9, who = null;
  for (const nm of names) { const { P, I } = get(nm);
    for (let t = 0; t < I.length; t += 3) { const a = I[t]*3, b2 = I[t+1]*3, c = I[t+2]*3;
      const e1 = [P[b2]-P[a], P[b2+1]-P[a+1], P[b2+2]-P[a+2]], e2 = [P[c]-P[a], P[c+1]-P[a+1], P[c+2]-P[a+2]];
      const p = [d[1]*e2[2]-d[2]*e2[1], d[2]*e2[0]-d[0]*e2[2], d[0]*e2[1]-d[1]*e2[0]], det = e1[0]*p[0]+e1[1]*p[1]+e1[2]*p[2];
      if (Math.abs(det) < 1e-12) continue; const inv = 1/det, s = [o[0]-P[a], o[1]-P[a+1], o[2]-P[a+2]], u = (s[0]*p[0]+s[1]*p[1]+s[2]*p[2])*inv; if (u < 0 || u > 1) continue;
      const q = [s[1]*e1[2]-s[2]*e1[1], s[2]*e1[0]-s[0]*e1[2], s[0]*e1[1]-s[1]*e1[0]], v = (d[0]*q[0]+d[1]*q[1]+d[2]*q[2])*inv; if (v < 0 || u + v > 1) continue;
      const tt = (e2[0]*q[0]+e2[1]*q[1]+e2[2]*q[2])*inv; if (tt > 0 && tt < best) { best = tt; who = nm; } } }
  return who ? { who, p: o.map((v, i) => +(v + d[i]*best).toFixed(4)) } : null;
}
module.exports = { get, ray };
if (require.main === module) {
  const cmds = JSON.parse(process.argv[3]);
  for (const [names, o, d] of cmds) console.log(JSON.stringify(o), JSON.stringify(d), '->', JSON.stringify(ray(names, o, d)));
}
