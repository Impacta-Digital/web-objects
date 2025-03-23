import type { LabSections, LabData } from '../types/LabData';

const lab10_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque o banco de dados __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

const lab10_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Faça um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir os produtos que não foram vendidos.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
FROM TB_PRODUTO
WHERE ID_PRODUTO NOT IN (SELECT ID_PRODUTO
FROM TB_ITENSPEDIDO)`,
  },
];

const lab10_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Faça um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir os cargos que não possuem funcionários associados na tabela __TB_EMPREGADO__.',
  },
  {
    sectionType: 'response',
    content: `SELECT CARGO
FROM TB_CARGO
WHERE COD_CARGO NOT IN (SELECT COD_CARGO
FROM TB_EMPREGADO
WHERE COD_CARGO IS NOT NULL)`,
  },
];

const lab10_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Faça um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir os produtos vendidos em Abril de 2018 que não são da cor __PRATA__.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
FROM TB_PEDIDO AS PED
WHERE YEAR(DATA_EMISSAO) = 2018
      AND MONTH(DATA_EMISSAO) = 4
      AND NOT EXISTS (SELECT *
FROM TB_ITENSPEDIDO AS ITEM
INNER JOIN TB_COR AS COR
ON COR.CODCOR = ITEM.CODCOR
WHERE NUM_PEDIDO = PED.NUM_PEDIDO
AND COR.COR ='PRATA')`,
  },
];

const lab10_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Faça um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir os produtos que foram vendidos em abril de 2017.',
  },
  {
    sectionType: 'paragraph',
    content: 'O produto __CHAVEIROs DESMONTADO__ não deve ser exibido.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
FROM TB_PRODUTO
WHERE ID_PRODUTO IN(SELECT ID_PRODUTO
FROM TB_PEDIDO AS PED
INNER JOIN TB_ITENSPEDIDO AS ITEM
ON ITEM.NUM_PEDIDO = PED.NUM_PEDIDO
WHERE YEAR(DATA_EMISSAO)= 2017
AND MONTH(DATA_EMISSAO) = 4)
AND DESCRICAO<>'CHAVEIRO DESMONTADO'
ORDER BY DESCRICAO`,
  },
];

const lab10_6: LabSections = [
  {
    sectionType: 'title',
    content: '6. Faça um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir os vendedores que não venderam no mês Dezembro de 2012.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
FROM TB_VENDEDOR AS VEND
WHERE CODVEN NOT IN (SELECT DISTINCT CODVEN
FROM TB_PEDIDO AS PED
WHERE YEAR(DATA_EMISSAO)= 2012
AND MONTH(DATA_EMISSAO) = 12)`,
  },
];

const lab10Data: LabData = [lab10_1, lab10_2, lab10_3, lab10_4, lab10_5, lab10_6];

export default lab10Data;
