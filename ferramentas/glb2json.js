// Converte .glb em glTF JSON com o buffer embutido em base64 (o artifact não serve .glb, mas serve .json).
const fs = require('fs');
const [src, out] = process.argv.slice(2);
const b = fs.readFileSync(src);
const jl = b.readUInt32LE(12), json = JSON.parse(b.slice(20, 20 + jl).toString());
const binLen = b.readUInt32LE(20 + jl), bin = b.slice(28 + jl, 28 + jl + binLen);
json.buffers = [{ byteLength: bin.length, uri: 'data:application/octet-stream;base64,' + bin.toString('base64') }];
fs.writeFileSync(out, JSON.stringify(json));
console.log(out, (fs.statSync(out).size / 1e6).toFixed(1) + ' MB');
