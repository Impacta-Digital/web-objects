import type { LabSections, LabData } from '../types/LabData';

// ==================== A1 ====================

const lab06A1_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque banco de dados __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

const lab06A1_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Leia a tabela __TB_PRODUTO__',
  },
  {
    sectionType: 'paragraph',
    content:
      'Exiba as colunas __ID_PRODUTO__, __DESCRICAO__, __PRECO_CUSTO__ e __PRECO_VENDA__, calculando o lucro unitário (__PRECO_VENDA__ - __PRECO_CUSTO__).',
  },
  {
    sectionType: 'response',
    content: `SELECT ID_PRODUTO
,DESCRICAO
,PRECO_CUSTO
,PRECO_VENDA
,PRECO_VENDA - PRECO_CUSTO AS [lucro unitário]
FROM TB_PRODUTO`,
  },
];

const lab06A1_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Leia a tabela __TB_PRODUTO__',
  },
  {
    sectionType: 'paragraph',
    content:
      'Exiba os campos __ID_PRODUTO__ e __DESCRICAO__, calculando o valor total investido no estoque daquele produto (__QTD_REAL__ * __PRECO_CUSTO__).',
  },
  {
    sectionType: 'response',
    content: `SELECT ID_PRODUTO
,DESCRICAO
,QTD_REAL * PRECO_CUSTO AS [VALOR TOTAL INVESTIDO]
FROM TB_PRODUTO`,
  },
];

const lab06A1_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Leia a tabela __TB_PRODUTO__',
  },
  {
    sectionType: 'paragraph',
    content:
      'Exiba as colunas __ID_PRODUTO__, __DESCRICAO__, __PRECO_CUSTO__ e __PRECO_VENDA__, calculando o lucro unitário em reais (__PRECO_VENDA__ - __PRECO_CUSTO__) e o lucro unitário percentual ((100 * (__PRECO_VENDA__ - __PRECO_CUSTO__) / __PRECO_CUSTO__)).',
  },
  {
    sectionType: 'paragraph',
    content: '__Obs.:__ Note que não existe divisão por zero.',
  },
  {
    sectionType: 'response',
    content: `SELECT ID_PRODUTO,
DESCRICAO,
PRECO_CUSTO,
PRECO_VENDA,
PRECO_VENDA - PRECO_CUSTO AS [lucro unitário],
(100 * (PRECO_VENDA - PRECO_CUSTO) / PRECO_CUSTO) as [Percentual lucro unitário]
FROM TB_PRODUTO
where PRECO_CUSTO>0`,
  },
];

const lab06A1Data: LabData = [lab06A1_1, lab06A1_2, lab06A1_3, lab06A1_4];

// ==================== A2 ====================

const lab06A2_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque banco de dados __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

const lab06A2_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Na tabela __TB_PRODUTO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Exiba os registros que tenham quantidade real acima de 5000.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
FROM TB_PRODUTO
WHERE QTD_REAL>5000`,
  },
];

const lab06A2_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Na tabela __TB_PRODUTO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Exiba os registros com a __QTD_REAL__ entre 500 e 1000 unidades.',
  },
  {
    sectionType: 'response',
    content: `SELECT * FROM TB_PRODUTO
WHERE QTD_REAL >= 500 AND QTD_REAL <=1000

ou

SELECT * FROM TB_PRODUTO
WHERE QTD_REAL BETWEEN 500 AND 1000`,
  },
];

const lab06A2_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Na tabela __TB_PRODUTO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Exiba os produtos com quantidade real acima de 5000 e código do tipo igual a 6.',
  },
  {
    sectionType: 'response',
    content: `SELECT * FROM TB_PRODUTO
WHERE QTD_REAL>5000
AND COD_TIPO = 6`,
  },
];

const lab06A2Data: LabData = [lab06A2_1, lab06A2_2, lab06A2_3, lab06A2_4];

// ==================== A3 ====================

const lab06A3_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque banco de dados __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

// Section 2 (A3)
const lab06A3_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Faça uma query para exibir:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os clientes dos estados de Minas Gerais e Rio de Janeiro (__MG__, __RJ__).',
  },
  {
    sectionType: 'response',
    content: `SELECT CODCLI
      ,CIDADE
FROM TB_CLIENTE
WHERE ESTADO ='MG' OR ESTADO ='RJ'`,
  },
];

const lab06A3_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'O nome do empregado __MARCO ANTONIO__.',
  },
  {
    sectionType: 'response',
    content: `SELECT * FROM TB_EMPREGADO
WHERE NOME LIKE 'MARCO ANTONIO%'

ou

SELECT * FROM TB_EMPREGADO
WHERE NOME = 'MARCO ANTONIO'`,
  },
];

const lab06A3_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os clientes que tenham __NOME__ terminando com __LTDA__.',
  },
  {
    sectionType: 'response',
    content: `select * from TB_CLIENTE
where NOME LIKE '%LTDA'`,
  },
];

const lab06A3_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os clientes que tenham __NOME__ contendo __BRINDES__.',
  },
  {
    sectionType: 'response',
    content: `select * from TB_CLIENTE
where NOME LIKE '%BRINDES%'`,
  },
];

const lab06A3Data: LabData = [lab06A3_1, lab06A3_2, lab06A3_3, lab06A3_4, lab06A3_5];

export { lab06A1Data, lab06A2Data, lab06A3Data };
