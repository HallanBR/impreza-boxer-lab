// Gera _auditoria.html: cópia da página com funções de verificação expostas no console.
//   __audit()        → para cada conjunto, os conjuntos que ele toca (amostrando a superfície a cada ~5 mm)
//   __near(a, b)     → menor distância entre dois conjuntos (em mm reais) e onde fica o ponto mais próximo
// Uso: node ferramentas/gerar-auditoria.js && node ferramentas/serve.js . 8766 → abrir /_auditoria.html
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '..');
let t = fs.readFileSync(path.join(raiz, 'impreza-boxer-lab.html'), 'utf8');
const codigo = `
const __pts = (p, step = .005) => { const out = []; p.pcs.forEach(pc => { if (!pc.mesh.visible && !p.gearbox && !p.covers) return; const P = pc.mesh.geometry.attributes.position;
  for (let i = 0; i < P.count; i += 3) { const a = [P.getX(i), P.getY(i), P.getZ(i)], b = [P.getX(i+1), P.getY(i+1), P.getZ(i+1)], c = [P.getX(i+2), P.getY(i+2), P.getZ(i+2)];
    const e = Math.max(Math.hypot(b[0]-a[0], b[1]-a[1], b[2]-a[2]), Math.hypot(c[0]-a[0], c[1]-a[1], c[2]-a[2])), n = Math.min(40, Math.ceil(e/step));
    for (let u = 0; u <= n; u++) for (let v = 0; v <= n - u; v++) { const w = 1 - (u + v)/n; out.push([a[0]*w + b[0]*u/n + c[0]*v/n, a[1]*w + b[1]*u/n + c[1]*v/n, a[2]*w + b[2]*u/n + c[2]*v/n]); } } }); return out; };
window.__audit = () => { const cell = .008, grid = new Map(), K = (x, y, z) => Math.floor(x/cell) + ',' + Math.floor(y/cell) + ',' + Math.floor(z/cell);
  const P2 = new Map(); PARTS.forEach((p, i) => { const ps = __pts(p); P2.set(p, ps); ps.forEach(q => { const k = K(...q); let s = grid.get(k); if (!s) grid.set(k, s = new Set()); s.add(i); }); });
  return PARTS.map((p, i) => { const touch = new Map();
    P2.get(p).forEach(q => { const cx = Math.floor(q[0]/cell), cy = Math.floor(q[1]/cell), cz = Math.floor(q[2]/cell);
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) { const s = grid.get((cx+dx) + ',' + (cy+dy) + ',' + (cz+dz)); if (s) s.forEach(j => { if (j !== i) touch.set(j, (touch.get(j) || 0) + 1); }); } });
    return { id: p.id, toca: [...touch.entries()].sort((a, b) => b[1] - a[1]).map(([j, n]) => PARTS[j].id + ':' + n) }; }); };
window.__box = id => partById[id].pcs.map(pc => { const b = pc.mesh.geometry.boundingBox; return [b.min, b.max].map(v => [v.x, v.y, v.z].map(n => n.toFixed(3)).join(',')).join(' → '); });
window.__near = (a, b) => { const A = __pts(partById[a], .004), B = __pts(partById[b], .004), cell = .01, g = new Map(), K = (x, y, z) => Math.floor(x/cell) + ',' + Math.floor(y/cell) + ',' + Math.floor(z/cell);
  B.forEach(q => { const k = K(...q); (g.get(k) || g.set(k, []).get(k)).push(q); });
  let best = 1e9, at = null, n = 0; A.forEach(q => { const cx = Math.floor(q[0]/cell), cy = Math.floor(q[1]/cell), cz = Math.floor(q[2]/cell);
    for (let dx = -2; dx <= 2; dx++) for (let dy = -2; dy <= 2; dy++) for (let dz = -2; dz <= 2; dz++) (g.get((cx+dx) + ',' + (cy+dy) + ',' + (cz+dz)) || []).forEach(r => { const d = Math.hypot(q[0]-r[0], q[1]-r[1], q[2]-r[2]); if (d < .0035) n++; if (d < best) { best = d; at = q; } }); });
  return best > 1 ? a + ' x ' + b + ': longe' : a + ' x ' + b + ': ' + (best*92/.121).toFixed(1) + ' mm em (' + at.map(v => v.toFixed(3)).join(', ') + ') · pontos colados: ' + n; };
`;
t = t.replace('// ---------- válvulas', codigo + '// ---------- válvulas');
fs.writeFileSync(path.join(raiz, '_auditoria.html'), t);
console.log('_auditoria.html gerado');
