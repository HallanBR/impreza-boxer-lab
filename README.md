# Impreza Boxer Lab

Motor boxer **Subaru EJ20 (EJ204)** do **Impreza 2.0R, 3ª geração (2008–2011)** em 3D, feito para estudar as peças.

**Site:** https://hallanbr.github.io/impreza-boxer-lab/

## O que dá para fazer

- Ver o motor **montado**, **explodido** (conjuntos afastados) ou em **explosão total** (cada conjunto desmontado, com parafusos e fixadores separados).
- Girar o motor nos eixos X, Y e Z e usar o raio‑X do bloco.
- Simular o motor girando: virabrequim, pistões, bielas, comandos, válvulas e molas, correias e polias se movem juntos, na ordem de ignição 1‑3‑2‑4.
- Clicar em qualquer peça para ver o nome, para que serve e, quando existe, a peça detalhada do kit imprimível.
- Mostrar ou esconder o câmbio e as capas da correia dentada; modo econômico para gastar menos GPU.

## Arquivos

| Caminho | O que é |
|---|---|
| `index.html` | Página do GitHub Pages (gerada por `ferramentas/gerar-index.js`) |
| `impreza-boxer-lab.html` | Fonte da página |
| `modelos/ej20-montagem.json` | Motor montado, separado em peças numeradas (glTF com o buffer embutido) |
| `modelos/ej20-detalhes.json` | Peças detalhadas do kit imprimível, usadas no painel lateral |
| `ferramentas/` | Scripts que separam o modelo em peças, empacotam os STLs, sondam a geometria e servem a página localmente |

Para rodar localmente: `node ferramentas/serve.js . 8766` e abrir `http://127.0.0.1:8766/`.

Depois de alterar `impreza-boxer-lab.html`, gere de novo o `index.html` com `node ferramentas/gerar-index.js`.

## Créditos e licenças dos modelos 3D

Projeto de estudo, **sem fins lucrativos**.

- **Montagem do motor:** [“Subaru Engine”](https://sketchfab.com/3d-models/subaru-engine-5b78dd699241424c981c02cd21dad3a9) por **shockforcegame**, licença [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Foi separado em peças, e algumas foram trocadas ou corrigidas (coletor de admissão, embreagem, ressaltos dos comandos).
- **Peças detalhadas:** [“Subaru WRX EJ20 Boxer Engine Model”](https://www.thingiverse.com/thing:1643878) por **ericthepoolboy**, licença [CC BY‑NC](https://creativecommons.org/licenses/by-nc/4.0/). Por causa dessa licença, este material não pode ser usado para fins comerciais.
- **Demais peças** (escape, correias, acessórios, sensores, juntas, suportes, chicote, mangueiras etc.) foram modeladas no próprio código da página.

Bibliotecas: [three.js](https://threejs.org/) 0.160, carregado do jsDelivr.
