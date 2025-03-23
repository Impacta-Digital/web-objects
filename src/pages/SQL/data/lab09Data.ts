import type { LabSections, LabData } from '../types/LabData';

const lab09_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque o banco de dados __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

const lab09_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Faça uma query para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Calcular a média de preço de venda (__PRECO_VENDA__) da tabela __TB_PRODUTO__.',
  },
  {
    sectionType: 'response',
    content: `SELECT AVG(PRECO_VENDA) AS PRECO_MEDIO
FROM TB_PRODUTO`,
  },
];

const lab09_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Faça uma query para:',
  },
  {
    sectionType: 'paragraph',
    content:
      'Calcular os totais vendidos por vendedor (mostrar __TB_VENDEDOR.NOME__ e a soma de __TB_PEDIDO.VLR_TOTAL__) em janeiro de 2017.',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir o nome do vendedor.',
  },
  {
    sectionType: 'response',
    content: `SELECT VEND.NOME
      , SUM(PED.VLR_TOTAL) AS TOT_VENDIDO
FROM TB_PEDIDO PED
INNER JOIN TB_VENDEDOR VEND
ON PED.CODVEN=VEND.CODVEN
WHERE PED.DATA_EMISSAO BETWEEN '2017.1.1' AND '2017.1.31'
GROUP BY VEND.NOME`,
  },
];

const lab09_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Faça uma query para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Calcular o total comprado por cliente em janeiro de 2017.',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir o nome do cliente.',
  },
  {
    sectionType: 'response',
    content: `SELECT CLI.CODCLI
      , CLI.NOME
      , SUM(PED.VLR_TOTAL) AS TOT_COMPRADO
FROM TB_PEDIDO PED
INNER JOIN TB_CLIENTE CLI
ON PED.CODCLI = CLI.CODCLI
WHERE PED.DATA_EMISSAO BETWEEN '2017.1.1' AND '2017.1.31'
GROUP BY CLI.CODCLI, CLI.NOME`,
  },
];

const lab09_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Faça uma query para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Calcular os totais vendidos por vendedor em janeiro de 2018.',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir o nome do vendedor e mostrar apenas os vendedores que venderam mais de R$40.000,00.',
  },
  {
    sectionType: 'response',
    content: `SELECT VEND.CODVEN
      , VEND.NOME
      , SUM(PED.VLR_TOTAL) AS TOT_VENDIDO
FROM TB_PEDIDO PED
INNER JOIN TB_VENDEDOR VEND
ON PED.CODVEN = VEND.CODVEN
WHERE PED.DATA_EMISSAO BETWEEN '2018.1.1' AND '2018.1.31'
GROUP BY VEND.CODVEN
      , VEND.NOME
HAVING SUM(PED.VLR_TOTAL) > 40000
ORDER BY 3`,
  },
];

const lab09_6: LabSections = [
  {
    sectionType: 'title',
    content: '6. Faça uma query para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Calcular o total vendido de cada produto em janeiro de 2016.',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir somente os 10 produtos que mais venderam.',
  },
  {
    sectionType: 'response',
    content: `SELECT TOP (10)
PROD.ID_PRODUTO
      ,PROD.DESCRICAO
      ,SUM(ITEM.QUANTIDADE) AS QTD_TOTAL
      ,SUM( ITEM.PR_UNITARIO * ITEM.QUANTIDADE ) AS VLR_TOTAL
FROM TB_ITENSPEDIDO ITEM
INNER JOIN TB_PRODUTO PROD
ON ITEM.ID_PRODUTO = PROD.ID_PRODUTO
INNER JOIN TB_PEDIDO PED
ON ITEM.NUM_PEDIDO = PED.NUM_PEDIDO
WHERE PED.DATA_EMISSAO BETWEEN '2016.1.1' AND '2016.1.31'
GROUP BY PROD.ID_PRODUTO
      ,PROD.DESCRICAO
ORDER BY 4 DESC`,
  },
];

const lab09Data: LabData = [lab09_1, lab09_2, lab09_3, lab09_4, lab09_5, lab09_6];

export default lab09Data;
