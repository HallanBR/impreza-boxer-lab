// Gera o index.html do GitHub Pages a partir de impreza-boxer-lab.html (a página do artifact não traz
// <!doctype>/<head> próprios, que o claude.ai acrescenta na publicação). Uso: node ferramentas/gerar-index.js
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '..');
const pagina = fs.readFileSync(path.join(raiz, 'impreza-boxer-lab.html'), 'utf8');
const cabecalho = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Motor boxer EJ20 do Subaru Impreza 2.0R (2008–2011) em 3D: vista montada, explodida e explosão total até os parafusos.">
<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
`;
fs.writeFileSync(path.join(raiz, 'index.html'), cabecalho + pagina.replace(/^<title>/, '<title>') + '\n</html>\n');
console.log('index.html gerado');
