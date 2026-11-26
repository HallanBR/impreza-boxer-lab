# Pendências do motor EJ20 — análise de 26/11/2026

Análise feita em 26/11/2026; os itens marcados com ✅ já foram corrigidos no site.
Como foi feito: (1) verificação automática de encostos entre os 78 conjuntos (a superfície de cada peça é amostrada a cada ~5 mm e comparada com as outras); (2) comparação de tamanhos com o EJ20 real, usando o pistão (Ø 92 mm) como régua; (3) revisão peça por peça contra o EJ20 / Impreza GH real.

Prioridade: **A** = visível e errado · **B** = diferente do real, mas discreto · **C** = detalhe / a confirmar.

## 1. Peças atravessando outras — ✅ resolvido em 26/11/2026

| # | Peça | Correção | Medição depois |
|---|---|---|---|
| 1.1 | Juntas do cabeçote | Contorno externo agora vem da face do cabeçote; os furos (cilindros, galerias, parafusos) vêm do bloco, só os que caem dentro dela | Longe do coxim; 8 mm do tensor; 1,7 mm da bomba d'água sem contato |
| 1.2 | Suporte do compressor | Não atravessava: os ressaltos só se apoiam na frente do cabeçote. Ressaltos movidos para fora da linha da junta e canto da placa recortado | 7 mm da engrenagem do comando, 9 mm da correia |
| 1.3 | Coxins | Parafusos na aba firme da lateral do bloco (y ≈ 0,20); braço sai para fora e só depois desce | Longe do cabeçote e do escape; 7 mm do cárter |
| 1.4 | Solenoide do AVCS esquerdo | Saiu de cima da capa dianteira do mancal para o vão entre as capas | 26 mm da capa; 18 mm da bomba da direção |
| 1.5 | Mangueira superior do radiador | Bocal um pouco mais para fora | 5,5 mm do suporte da bomba da direção |
| 1.6 | Chicote × linha da direção | Tronco esquerdo encurtado; ramo do interruptor de óleo passa por cima do coletor e desce pela frente | Longe da bomba; 8–9 mm da borboleta e do coletor |
| 1.7 | Capas da correia × engrenagens | Falso alarme | 9–12 mm de folga |
| 1.8 | Bobinas | Ganharam a aba de borracha que apoia na borda do furo da tampa; ficaram alinhadas com as velas | Apoiadas na tampa (0 mm) e encaixadas na vela |
| 1.9 | Coxim superior × comando | Falso alarme | 9,8 mm |
| 1.10 | Sonda lambda traseira | Já encostava no tubo; o aviso vinha da malha com poucos pontos | Encostada |

Ferramenta usada: `node ferramentas/gerar-auditoria.js` gera `_auditoria.html` com `__near(a, b)` (distância e local do contato) e `__audit()`.

## 2. Tamanhos fora do real (régua: pistão de 92 mm)

| # | Prior. | Peça | No modelo | Real (aprox.) |
|---|---|---|---|---|
| 2.1 | ✅ | Alternador (diâmetro) | agora 125 mm (polia 52 mm) | 120–130 mm |
| 2.2 | ✅ | Motor de arranque (diâmetro) | agora 73 mm, solenoide maior | 70–80 mm |
| 2.3 | ✅ | Compressor do A/C (diâmetro) | agora 115 mm (polia 100 mm) | 110–125 mm |
| 2.4 | ✅ | Bomba da direção (corpo) | agora 85 mm | 80–100 mm |
| 2.5 | ✅ | Corpo de borboleta (furo) | agora 62 mm (duto de ar acompanhou) | 60–65 mm |
| 2.6 | ✅ | Polia do virabrequim | agora 145 mm (canal da frente 127 mm) | 140–150 mm |
| 2.7 | C | Velas | 149 mm de ponta a ponta | 80–90 mm (o cabeçote do modelo é mais grosso que o real; a vela foi esticada até a bobina) |
| — | ok | Filtro de óleo | 65 mm | 65–68 mm |

## 3. Desenho diferente do real

| # | Prior. | Peça | O que difere |
|---|---|---|---|
| 3.1 | ✅ | Tampas dos cabeçotes | Refeitas como fundidas: aba de vedação com 8 parafusos, corpo abaulado, espinha central com os poços ocos das velas e nervuras. |
| 3.2 | ✅ | Bloco | Nova peça "Junção das metades do bloco": linha de união em cima e embaixo, no plano do virabrequim, e 3 ressaltos com parafusos atravessados no alto. O sensor de detonação foi para a metade direita. |
| 3.3 | ✅ | Correia dentada | Agora com dentes na face interna (passo de 9,5 mm), encaixando nas engrenagens; as polias lisas tocam o dorso. |
| 3.4 | ✅ | Tensor da correia dentada | Ganhou o tensor automático hidráulico: cilindro em pé, preso por duas orelhas, com a haste apoiada na ponta do braço. |
| 3.5 | ✅ | Engrenagens dos comandos de admissão | Ganharam a tampa do atuador do AVCS com O-ring e parafusos, girando junto com a engrenagem. |
| 3.6 | B | Capas da correia dentada | As internas No. 2 foram feitas (ver 4.11). Falta o formato das externas: hoje seguem o contorno das polias, e as reais têm desenho próprio, com janela para as marcas de ponto. |
| 3.7 | B | Coletor de escape | Ganhou 2 prisioneiros com porca em cada flange. Falta: os dutos ainda têm traçado simplificado, e não de comprimentos equalizados. |
| 3.8 | ✅ | Coletor de admissão | Plenum de resina, de formas arredondadas, com nervuras moldadas; dutos e flanges também de resina. |
| 3.9 | ✅ | Válvulas | Ganharam travas (meias-luas), guias e retentores de haste; os tuchos já existiam. |
| 3.10 | ✅ | Pistões | Ganharam os 3 anéis, o pino e as travas do pino, que se movem junto com o pistão. |
| 3.11 | ✅ | Vareta de óleo | Tubo-guia sai da lateral esquerda do bloco, na frente, acima do cárter; passa sob o cabeçote e sobe por fora das engrenagens, como no manual. |
| 3.12 | ✅ | Sensor de temperatura do líquido | Agora na passagem de água da base de admissão direita, atrás do alternador, como no manual. |
| 3.13 | ✅ | Tampa de óleo | Agora é o bocal do manual: flange com junta na frente do cabeçote esquerdo, tubo que sobe e tampa com O-ring. |

## 4. Peças que ainda faltam

| # | Prior. | Peça | Observação |
|---|---|---|---|
| 4.1 | ✅ | Tubo de água (by-pass) | Tubo de aço sobre o bloco, sob o coletor, com flange na frente, presilhas e dois bicos atrás (aquecimento e borboleta), como o item 33 do manual. |
| 4.2 | ✅ | Parafusos dos cabeçotes | 6 por lado, com arruela, dentro do cabeçote sob os comandos; aparecem na explosão. |
| 4.3 | ✅ | Bronzinas do virabrequim | 5 pares de meias-buchas (#1 a #5). As arruelas de encosto não foram feitas: o manual não as lista separadas. |
| 4.4 | ✅ | Anéis e pinos dos pistões | Ver 3.10. |
| 4.5 | ✅ | Gancho de içamento | O "engine rear hanger": base aparafusada no alto do bloco, atrás, com olhal. |
| 4.6 | ✅ | Cabo de massa | Cordoalha com olhal no alto do bloco, atrás à esquerda, seguindo para a carroceria. |
| 4.7 | B | Rolamento e garfo da embreagem | Rolamento e garfo com pino de apoio feitos. Falta o cilindro auxiliar (acionamento): confirmar no manual de transmissão se o GH 2.0 é a cabo ou hidráulico. |
| 4.8 | C | Defletor de óleo do cárter | Confirmado no manual (baffle plate, entre o bloco e o cárter). |
| 4.9 | C | Suportes do escape (coxins/ganchos) | O catalisador fica preso só pelo próprio tubo. |
| 4.10 | C | Fora do motor (opcional): radiador e ventoinha, caixa do filtro de ar, travessa dianteira, coxim do câmbio | Hoje as mangueiras, o duto de ar e os coxins terminam abertos porque essas peças são do carro. |

| 4.11 | ✅ | Capas internas da correia (No. 2) | Chapas atrás das engrenagens dos comandos, com furos dos cubos e parafusos na borda. |
| 4.12 | C | Guia da correia dentada (só no câmbio manual) | Peça pequena junto à engrenagem do virabrequim. |
| 4.13 | C | Tampa do separador de óleo, tampas e bujões de serviço do bloco | Listados no manual (ME-03561). |

## O que o manual de fábrica confirmou (Docs, 26/11/2026)

Fonte: manual de serviço GH/GE 2008, mercado GB. Motor H4DO 2.0 (= EJ20 DOHC aspirado), seção MECHANICAL, figuras ME-03560, ME-03566, ME-03561 e ME-00413. O manual fica só no computador: a pasta Docs/ está no .gitignore.

- **Coxins (ME-00413):** a borracha tem dois prisioneiros embaixo. Por cima vai um suporte de chapa estampada, aparafusado no bloco (35 N·m). Falta comparar com o desenho atual do modelo.
- **Correia dentada:** confirmados o tensor hidráulico automático, as duas polias guia e as tampas do AVCS (itens 3.4 e 3.5).
- **Vareta, sensor de temperatura e bocal de óleo:** posições nos itens 3.11 a 3.13.
- **Tubo de água entre os cabeçotes (4.1):** confirmado (water by-pass pipe).

Sites analisados, sem baixar nada:
- **subaruclub.cz:** lista 27 manuais do Impreza GE/GH/GR/GV. Para o motor, o mais útil seria o FSM americano em PDF.
- **getthemanuals.org:** tem o mesmo manual HTML 2008–2011 que já está em Docs.
- Nenhum dos dois tem catálogo de peças (EPC) com desenhos explodidos.
