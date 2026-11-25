// Junta STLs escolhidos num GLB só (cada STL soldado e centralizado na origem, em mm).
const { readSTL, weld, stats } = require('./lib');
const { writeGLB } = require('./glbwrite');
const path = require('path');
const [dir, out, ...names] = process.argv.slice(2);
const items = names.map(n => {
  const w = weld(readSTL(path.join(dir, n + '.stl')), null, 1000), s = stats(w);
  for (let i = 0; i < w.pos.length; i += 3) for (let k = 0; k < 3; k++) w.pos[i+k] -= s.center[k];
  console.log(n, s.tris);
  return { name: n, pos: w.pos, idx: w.idx, color: [0.75, 0.77, 0.8, 1] };
});
writeGLB(out, items, { copyright: 'ericthepoolboy (Thingiverse 1643878) CC BY-NC' });
