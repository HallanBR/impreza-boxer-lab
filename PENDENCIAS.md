# Pendências do motor EJ20 — análise de 26/11/2026

Rodada só de análise. Nada foi alterado no site.
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
| 2.3 | B | Compressor do A/C (diâmetro) | 88 mm | 110–125 mm |
| 2.4 | B | Bomba da direção (corpo) | 64 mm | 80–100 mm |
| 2.5 | B | Corpo de borboleta (furo) | 49 mm | 60–65 mm |
| 2.6 | B | Polia do virabrequim | 122 mm | 140–150 mm |
| 2.7 | C | Velas | 149 mm de ponta a ponta | 80–90 mm (o cabeçote do modelo é mais grosso que o real; a vela foi esticada até a bobina) |
| — | ok | Filtro de óleo | 65 mm | 65–68 mm |

## 3. Desenho diferente do real

| # | Prior. | Peça | O que difere |
|---|---|---|---|
| 3.1 | ✅ | Tampas dos cabeçotes | Refeitas como fundidas: aba de vedação com 8 parafusos, corpo abaulado, espinha central com os poços ocos das velas e nervuras. |
| 3.2 | ✅ | Bloco | Nova peça "Junção das metades do bloco": linha de união em cima e embaixo, no plano do virabrequim, e 3 ressaltos com parafusos atravessados no alto. O sensor de detonação foi para a metade direita. |
| 3.3 | ✅ | Correia dentada | Agora com dentes na face interna (passo de 9,5 mm), encaixando nas engrenagens; as polias lisas tocam o dorso. |
| 3.4 | ✅ | Tensor da correia dentada | Ganhou o tensor automático hidráulico: cilindro em pé, preso por duas orelhas, com a haste apoiada na ponta do braço. |
| 3.5 | B | Engrenagens dos comandos de admissão | São lisas. **Manual:** as de admissão têm no centro a tampa do atuador do AVCS (actuator cover), com O-ring. |
| 3.6 | B | Capas da correia dentada | Seguem o contorno das polias. **Manual (ME-03560):** as externas são três (esquerda, direita e frontal central), como já está. Atrás das engrenagens ainda há as capas internas No. 2 esquerda e direita, que faltam no modelo. |
| 3.7 | B | Coletor de escape | Traçado simplificado; o do GH 2.0R tem dutos de comprimentos equalizados e flanges com prisioneiros e porcas. |
| 3.8 | B | Coletor de admissão | Plenum em caixa simples; o original é de resina com formato orgânico e os bicos encaixados no próprio coletor. |
| 3.9 | B | Válvulas | Faltam as travas (retainer key), os retentores de haste, as guias e os tuchos (valve lifter), todos listados no manual. |
| 3.10 | B | Pistões (modelo de origem) | Peça única: sem anéis nem pino visíveis separadamente. |
| 3.11 | B | Vareta de óleo | Está na traseira esquerda. **Manual (ME-03561, item 23):** o guia da vareta sai do bloco esquerdo, na frente, e desce até o cárter. |
| 3.12 | B | Sensor de temperatura do líquido | Está na carcaça da termostática. **Manual:** para tirá-lo é preciso remover o alternador, então ele fica na frente, sob o coletor, logo atrás do alternador. |
| 3.13 | B | Tampa de abastecimento de óleo | Está na tampa do cabeçote direito. **Manual (ME-03566, itens 23–26):** é um bocal próprio (oil filler duct), com junta, O-ring e tampa, aparafusado na frente do cabeçote e separado da tampa de válvulas. |

## 4. Peças que ainda faltam

| # | Prior. | Peça | Observação |
|---|---|---|---|
| 4.1 | ✅ | Tubo de água (by-pass) | Tubo de aço sobre o bloco, sob o coletor, com flange na frente, presilhas e dois bicos atrás (aquecimento e borboleta), como o item 33 do manual. |
| 4.2 | ✅ | Parafusos dos cabeçotes | 6 por lado, com arruela, dentro do cabeçote sob os comandos; aparecem na explosão. |
| 4.3 | B | Bronzinas do virabrequim e arruelas de encosto | Só as bielas têm bronzina. |
| 4.4 | B | Anéis e pinos dos pistões | Ligado ao item 3.10. |
| 4.5 | B | Gancho de içamento | O manual lista o "engine rear hanger", no alto do bloco, na traseira. |
| 4.6 | B | Cabo de massa (aterramento) do motor | Liga o motor à carroceria/bateria. |
| 4.7 | B | Rolamento e garfo da embreagem / cilindro auxiliar | Fazem parte do conjunto da embreagem/câmbio. |
| 4.8 | C | Defletor de óleo do cárter | Confirmado no manual (baffle plate, entre o bloco e o cárter). |
| 4.9 | C | Suportes do escape (coxins/ganchos) | O catalisador fica preso só pelo próprio tubo. |
| 4.10 | C | Fora do motor (opcional): radiador e ventoinha, caixa do filtro de ar, travessa dianteira, coxim do câmbio | Hoje as mangueiras, o duto de ar e os coxins terminam abertos porque essas peças são do carro. |

| 4.11 | B | Capas internas da correia (No. 2 esquerda e direita) | Ver 3.6. |
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
