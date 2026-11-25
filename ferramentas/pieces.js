// Separa o GLB do Sketchfab em peças soltas numeradas (G0 = maior) e grava um GLB novo + tabela.
const { readGLB, weld, components, stats } = require('./lib');
const { writeGLB } = require('./glbwrite');
const fs = require('fs');
const [src, out, table] = process.argv.slice(2);
const g = readGLB(src), pieces = [];
g.prims.forEach(p => components(weld(p.pos, p.idx, 1e5)).forEach(c => pieces.push({ ...c, color: p.color, st: stats(c) })));
pieces.sort((a, b) => b.st.tris - a.st.tris || b.st.center[0] - a.st.center[0]);
pieces.forEach((p, i) => p.name = 'G' + i);
writeGLB(out, pieces.map(p => ({ name: p.name, pos: p.pos, idx: p.idx, color: p.color })));
const f3 = v => v.toFixed(3);
fs.writeFileSync(table, pieces.map(p => `${p.name}\ttris ${p.st.tris}\tcol ${p.color.slice(0,3).map(x => Math.round(x*255)).join('/')}\tsize ${p.st.size.map(f3).join(' ')}\tctr ${p.st.center.map(f3).join(' ')}`).join('\n'));
console.log(pieces.length, 'peças');
