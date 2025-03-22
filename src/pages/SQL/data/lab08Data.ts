import type { LabSections, LabData } from '../types/LabData';

const lab08_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque o banco __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

const lab08_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content:
      '__NUM_PEDIDO__, __DATA_EMISSAO__ e __VLR_TOTAL__ da tabela __TB_PEDIDO__, seguidos de __NOME__ do vendedor da tabela __TB_VENDEDOR__.',
  },
  {
    sectionType: 'response',
    content: `SELECT PED.NUM_PEDIDO
      ,PED.DATA_EMISSAO
      ,PED.VLR_TOTAL
      ,VEND.NOME
FROM TB_PEDIDO AS PED
INNER JOIN TB_VENDEDOR AS VEND
ON VEND.CODVEN = PED.CODVEN`,
  },
];

const lab08_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os itens de pedido (__TB_ITENSPEDIDO__) com o nome do produto (__TB_PRODUTO.DESCRICAO__).',
  },
  {
    sectionType: 'response',
    content: `SELECT ITEM.*
      ,PROD.DESCRICAO
FROM TB_ITENSPEDIDO AS ITEM
INNER JOIN TB_PRODUTO AS PROD
ON PROD.ID_PRODUTO = ITEM.ID_PRODUTO`,
  },
];

const lab08_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os itens de pedidos, o nome do produto e a cor (__TB_COR__).',
  },
  {
    sectionType: 'response',
    content: `SELECT ITEM.*
      ,PROD.DESCRICAO
      ,COR.COR
FROM TB_ITENSPEDIDO AS ITEM
INNER JOIN TB_PRODUTO AS PROD
ON PROD.ID_PRODUTO = ITEM.ID_PRODUTO
INNER JOIN TB_COR AS COR
ON COR.CODCOR = ITEM.CODCOR`,
  },
];

const lab08_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content:
      'As colunas __ID_PRODUTO__ e __DESCRICAO__ da tabela __TB_PRODUTO__, seguidos da descrição do tipo de produto (__TB_TIPOPRODUTO.TIPO__) e do nome da unidade de medida (__TB_UNIDADE.UNIDADE__).',
  },
  {
    sectionType: 'response',
    content: `SELECT PROD.ID_PRODUTO
      , PROD.DESCRICAO
      , TIPO.TIPO
      , UNID.UNIDADE
FROM TB_PRODUTO AS PROD
INNER JOIN TB_TIPOPRODUTO AS TIPO
ON TIPO.COD_TIPO = PROD.COD_TIPO
INNER JOIN TB_UNIDADE AS UNID
ON PROD.COD_UNIDADE=UNID.COD_UNIDADE`,
  },
];

const lab08_6: LabSections = [
  {
    sectionType: 'title',
    content: '6. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os pedidos (__TB_PEDIDO__) do vendedor __MARCELO__ em Janeiro de 2017.',
  },
  {
    sectionType: 'response',
    content: `SELECT PED.DATA_EMISSAO
      , PED.NUM_PEDIDO
      , VEND.NOME
FROM TB_PEDIDO AS PED
INNER JOIN TB_VENDEDOR AS VEND
ON PED.CODVEN=VEND.CODVEN
WHERE VEND.NOME ='MARCELO'
AND YEAR(DATA_EMISSAO) = 2017
AND MONTH(DATA_EMISSAO) = 1`,
  },
];

const lab08_7: LabSections = [
  {
    sectionType: 'title',
    content: '7. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: '__NUM_PEDIDO__, __VLR_TOTAL__ (__PEDIDOS__) e __NOME__ (__TB_CLIENTE__).',
  },
  {
    sectionType: 'paragraph',
    content: 'Mostre apenas pedidos de janeiro de 2017 do estado de SP.',
  },
  {
    sectionType: 'response',
    content: `SELECT PED.NUM_PEDIDO
      , PED.VLR_TOTAL
      , CLI.NOME
FROM TB_PEDIDO AS PED
INNER JOIN TB_CLIENTE AS CLI
ON CLI.CODCLI = PED.CODCLI
AND YEAR(PED.DATA_EMISSAO) = 2017
AND MONTH(PED.DATA_EMISSAO) = 1
AND CLI.ESTADO ='SP'`,
  },
];

const lab08_8: LabSections = [
  {
    sectionType: 'title',
    content: '8. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'O número do pedido e o valor dos pedidos de cor __VERDE__ de 2012.',
  },
  {
    sectionType: 'response',
    content: `SELECT ITEM.NUM_PEDIDO
      , PED.VLR_TOTAL
      , YEAR(PED.DATA_EMISSAO) AS ANO
FROM TB_ITENSPEDIDO AS ITEM
INNER JOIN TB_PEDIDO AS PED
ON PED.NUM_PEDIDO = ITEM.NUM_PEDIDO
INNER JOIN TB_COR AS COR
ON COR.CODCOR = ITEM.CODCOR
WHERE COR.COR ='VERDE'
AND YEAR(PED.DATA_EMISSAO) = 2012`,
  },
];

const lab08Data: LabData = [lab08_1, lab08_2, lab08_3, lab08_4, lab08_5, lab08_6, lab08_7, lab08_8];

export default lab08Data;
