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
| 2.1 | A | Alternador (diâmetro) | 87 mm | 120–130 mm |
| 2.2 | A | Motor de arranque (diâmetro) | 52 mm | 70–80 mm |
| 2.3 | B | Compressor do A/C (diâmetro) | 88 mm | 110–125 mm |
| 2.4 | B | Bomba da direção (corpo) | 64 mm | 80–100 mm |
| 2.5 | B | Corpo de borboleta (furo) | 49 mm | 60–65 mm |
| 2.6 | B | Polia do virabrequim | 122 mm | 140–150 mm |
| 2.7 | C | Velas | 149 mm de ponta a ponta | 80–90 mm (o cabeçote do modelo é mais grosso que o real; a vela foi esticada até a bobina) |
| — | ok | Filtro de óleo | 65 mm | 65–68 mm |

## 3. Desenho diferente do real

| # | Prior. | Peça | O que difere |
|---|---|---|---|
| 3.1 | A | Tampas dos cabeçotes (modelo de origem) | São placas planas com furos. As do EJ20 DOHC são fundidas, arredondadas, com nervuras e os poços das velas no centro. |
| 3.2 | A | Bloco (modelo de origem) | Vem numa peça só. O bloco do boxer é dividido ao meio na vertical, com a linha de união e os parafusos passantes visíveis. |
| 3.3 | A | Correia dentada | Fita lisa; a real tem dentes e a marcação de sincronismo. |
| 3.4 | A | Tensor da correia dentada (modelo de origem) | Suporte e polia, sem o tensor hidráulico (cilindro com pistão que empurra o braço), que o EJ usa. |
| 3.5 | B | Engrenagens dos comandos de admissão | Lisas; no EJ204 a de admissão tem o atuador do AVCS (carcaça maior, atrás da engrenagem). |
| 3.6 | B | Capas da correia dentada | Seguem o contorno das polias; as reais têm formato próprio (central alta, janela para as marcas de ponto, encaixes entre as três peças). |
| 3.7 | B | Coletor de escape | Traçado simplificado; o do GH 2.0R tem dutos de comprimentos equalizados e flanges com prisioneiros e porcas. |
| 3.8 | B | Coletor de admissão | Plenum em caixa simples; o original é de resina com formato orgânico e os bicos encaixados no próprio coletor. |
| 3.9 | B | Válvulas | Faltam as travas (meias-luas) e os retentores de haste. |
| 3.10 | B | Pistões (modelo de origem) | Peça única: sem anéis nem pino visíveis separadamente. |
| 3.11 | C | Vareta de óleo | Está na traseira esquerda; no EJ fica na frente do lado esquerdo (confirmar no manual do GH). |
| 3.12 | C | Sensor de temperatura do líquido | Está na carcaça da termostática; no EJ costuma ficar no tubo de água sob o coletor (confirmar). |
| 3.13 | C | Tampa de abastecimento de óleo | Está na tampa do cabeçote direito; confirmar a posição no EJ204 (pode ser num bocal na frente do bloco). |

## 4. Peças que ainda faltam

| # | Prior. | Peça | Observação |
|---|---|---|---|
| 4.1 | A | Tubo de água entre os cabeçotes (sob o coletor) | Liga as saídas de água dos dois cabeçotes; existe no EJ. |
| 4.2 | A | Parafusos dos cabeçotes | Não aparecem na explosão total. |
| 4.3 | B | Bronzinas do virabrequim e arruelas de encosto | Só as bielas têm bronzina. |
| 4.4 | B | Anéis e pinos dos pistões | Ligado ao item 3.10. |
| 4.5 | B | Ganchos de içamento do motor | Dois suportes no alto do motor. |
| 4.6 | B | Cabo de massa (aterramento) do motor | Liga o motor à carroceria/bateria. |
| 4.7 | B | Rolamento e garfo da embreagem / cilindro auxiliar | Fazem parte do conjunto da embreagem/câmbio. |
| 4.8 | C | Defletor de óleo do cárter | Chapa interna que evita que o óleo balance. |
| 4.9 | C | Suportes do escape (coxins/ganchos) | O catalisador fica preso só pelo próprio tubo. |
| 4.10 | C | Fora do motor (opcional): radiador e ventoinha, caixa do filtro de ar, travessa dianteira, coxim do câmbio | Hoje as mangueiras, o duto de ar e os coxins terminam abertos porque essas peças são do carro. |

## Itens a confirmar antes de mexer

Algumas posições dependem do manual de fábrica do Impreza GH (EJ204), que não consegui achar na internet: vareta (3.11), sensor de temperatura (3.12), tampa de óleo (3.13), formato exato dos coxins e o traçado oficial da correia dentada. Se você tiver o manual ou fotos do seu motor, dá para acertar esses pontos com precisão.
