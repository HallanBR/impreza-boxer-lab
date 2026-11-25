// Escreve um GLB simples: cada item vira um nó com uma malha (posições + índices), material por cor.
const fs = require('fs');
function writeGLB(file, items, asset = {}) {
  const chunks = [], bufferViews = [], accessors = [], meshes = [], nodes = [], materials = [], matIdx = new Map();
  let off = 0;
  const push = (arr, target) => { const b = Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength); const pad = (4 - (b.length % 4)) % 4;
    chunks.push(b, Buffer.alloc(pad)); bufferViews.push({ buffer: 0, byteOffset: off, byteLength: b.length, target }); off += b.length + pad; return bufferViews.length - 1; };
  for (const it of items) {
    const key = it.color.join(',');
    if (!matIdx.has(key)) { matIdx.set(key, materials.length); materials.push({ name: 'c' + materials.length, pbrMetallicRoughness: { baseColorFactor: [...it.color.slice(0,3), 1], metallicFactor: 0.3, roughnessFactor: 0.6 }, doubleSided: true }); }
    const mn = [1e9,1e9,1e9], mx = [-1e9,-1e9,-1e9];
    for (let i = 0; i < it.pos.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], it.pos[i+k]); mx[k] = Math.max(mx[k], it.pos[i+k]); }
    const pv = push(it.pos, 34962); accessors.push({ bufferView: pv, componentType: 5126, count: it.pos.length/3, type: 'VEC3', min: mn, max: mx });
    const pa = accessors.length - 1;
    const iv = push(it.idx, 34963); accessors.push({ bufferView: iv, componentType: 5125, count: it.idx.length, type: 'SCALAR' });
    meshes.push({ name: it.name, primitives: [{ attributes: { POSITION: pa }, indices: accessors.length - 1, material: matIdx.get(key) }] });
    nodes.push({ name: it.name, mesh: meshes.length - 1, extras: it.extras || {} });
  }
  const bin = Buffer.concat(chunks);
  const json = { asset: { version: '2.0', generator: 'boxer-lab', ...asset }, scene: 0, scenes: [{ nodes: nodes.map((_, i) => i) }], nodes, meshes, materials, accessors, bufferViews, buffers: [{ byteLength: bin.length }] };
  let js = Buffer.from(JSON.stringify(json)); js = Buffer.concat([js, Buffer.alloc((4 - js.length % 4) % 4, 0x20)]);
  const header = Buffer.alloc(12); header.write('glTF', 0); header.writeUInt32LE(2, 4); header.writeUInt32LE(12 + 8 + js.length + 8 + bin.length, 8);
  const jh = Buffer.alloc(8); jh.writeUInt32LE(js.length, 0); jh.write('JSON', 4);
  const bh = Buffer.alloc(8); bh.writeUInt32LE(bin.length, 0); bh.write('BIN\0', 4);
  fs.writeFileSync(file, Buffer.concat([header, jh, js, bh, bin]));
}
module.exports = { writeGLB };
