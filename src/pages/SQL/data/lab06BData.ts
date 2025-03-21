import type { LabSections, LabData } from '../types/LabData';

const lab06B_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Retorne:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os dois últimos dígitos do CNPJ do fornecedor.',
  },
  {
    sectionType: 'paragraph',
    content:
      'Lembrando que a coluna __CNPJ__ está com 20 caracteres, logo, é necessário tirar os espaços em branco à direita.',
  },
  {
    sectionType: 'response',
    content: `SELECT NOME
      ,CNPJ
      ,RIGHT(RTRIM(CNPJ),2) AS CNPJ_DIGITO
FROM TB_FORNECEDOR`,
  },
];

const lab06B_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Retorne:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os números da Matriz ou Filial da coluna __CNPJ__ (0001) do fornecedor.',
  },
  {
    sectionType: 'response',
    content: `SELECT NOME
      ,CNPJ
      ,SUBSTRING(CNPJ,9,4) AS MATRIZ_FILIAL_CNPJ
FROM TB_FORNECEDOR`,
  },
];

const lab06B_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content:
      'As colunas __NOME__ e __SALARIO__ da tabela __TB_EMPREGADO__, sendo que a coluna __SALARIO__ deve ser exibida com __ZERO__ quando __NULL__.',
  },
  {
    sectionType: 'response',
    content: `SELECT NOME
      ,ISNULL(SALARIO,0) AS SALARIO
FROM TB_EMPREGADO
ORDER BY SALARIO`,
  },
];

const lab06B_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Retorne as colunas:',
  },
  {
    sectionType: 'list',
    content: ['NUM_PEDIDO', 'NOME DO VENDEDOR', 'VLR_TOTAL', 'SITUAÇÃO DO PEDIDO'],
  },
  {
    sectionType: 'paragraph',
    content: '__SITUACAO__ deve ser apresentada:',
  },
  {
    sectionType: 'list',
    content: ['Quando E então Encerrado', 'Quando C então Cancelado', 'Quando P então Pendente'],
  },
  {
    sectionType: 'response',
    content: `SELECT NUM_PEDIDO
      ,NOME AS NOME_VENDEDOR
      ,VLR_TOTAL
      ,IIF(SITUACAO='E','ENCERRADO'
      ,IIF(SITUACAO='C', 'CANCELADO','PENDENTE')) AS SITUACAO
FROM TB_PEDIDO AS PED
INNER JOIN TB_VENDEDOR AS VEND
ON PED.CODVEN=VEND.CODVEN

ou

SELECT NUM_PEDIDO
      ,NOME AS NOME_VENDEDOR
      ,VLR_TOTAL
      ,CASE SITUACAO
            WHEN 'E' THEN 'ENCERRADO'
            WHEN 'C' THEN 'CANCELADO'
            WHEN 'P' THEN 'PENDENTE'
      END AS SITUACAO
FROM TB_PEDIDO AS PED
INNER JOIN TB_VENDEDOR AS VEND
ON PED.CODVEN=VEND.CODVEN`,
  },
];

const lab06B_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Faça uma query para retornar:',
  },
  {
    sectionType: 'paragraph',
    content: 'O valor do item (__QUANTIDADE__ * __PR_UNITARIO__) da tabela __TB_ITENSPEDIDO__.',
  },
  {
    sectionType: 'paragraph',
    content: 'O valor do item deve ser arredondado com 2 casas decimais e apresentado somente com 2 casas decimais.',
  },
  {
    sectionType: 'paragraph',
    content: 'A query deve retornar também as colunas da tabela __TB_PRODUTO__:',
  },
  {
    sectionType: 'list',
    content: ['NUM_PEDIDO', 'NUM_ITEM', 'ID_PRODUTO', 'DESCRICAO'],
  },
  {
    sectionType: 'response',
    content: `SELECT ITEM.NUM_PEDIDO
      ,ITEM.NUM_ITEM
      ,ITEM.ID_PRODUTO
      ,PROD.DESCRICAO
      ,FORMAT(ROUND(ITEM.QUANTIDADE*ITEM.PR_UNITARIO,2), '#########0.00') AS PRECO
FROM TB_ITENSPEDIDO AS ITEM
INNER JOIN TB_PRODUTO AS PROD
ON ITEM.ID_PRODUTO=PROD.ID_PRODUTO`,
  },
];

const lab06B_6: LabSections = [
  {
    sectionType: 'title',
    content: '6. Na tabela __TB_EMPREGADO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Retorne somente o primeiro nome da coluna __NOME__.',
  },
  {
    sectionType: 'response',
    content: `SELECT NOME
      ,SUBSTRING(NOME,1,CHARINDEX(' ',NOME)) AS PRIMEIRO_NOME
FROM TB_EMPREGADO`,
  },
];

// Section 7
const lab06B_7: LabSections = [
  {
    sectionType: 'title',
    content: '7. Na tabela __TB_FORNECEDOR__',
  },
  {
    sectionType: 'paragraph',
    content: 'Retorne as colunas __NOME__ e __ESTADO__.',
  },
  {
    sectionType: 'paragraph',
    content: '__ESTADO__ deve ser apresentado por extenso, como exibido a seguir:',
  },
  {
    sectionType: 'list',
    content: [
      'ES -- ESPÍRITO SANTO',
      'MG - MINAS GERAIS',
      'PE - PERNAMBUCO',
      'PR - PARANÁ',
      'RJ - RIO DE JANEIRO',
      'RS - RIO GRANDE DO SUL',
      'SC - SANTA CATARINA',
      'SP - SÃO PAULO',
    ],
  },
  {
    sectionType: 'response',
    content: `SELECT NOME
      ,CASE ESTADO
            WHEN 'ES' THEN 'ESPÍRITO SANTO'
            WHEN 'MG' THEN 'MINAS GERAIS'
            WHEN 'PE' THEN 'PERNAMBUCO'
            WHEN 'PR' THEN 'PARANÁ'
            WHEN 'RJ' THEN 'RIO DE JANEIRO'
            WHEN 'RS' THEN 'RIO GRANDE DO SUL'
            WHEN 'SC' THEN 'SANTA CATARINA'
            WHEN 'SP' THEN 'SÃO PAULO'
            ELSE 'NAO SE APLICA'
      END AS ESTADO
FROM TB_FORNECEDOR
ORDER BY ESTADO`,
  },
];

const lab06B_8: LabSections = [
  {
    sectionType: 'title',
    content: '8. Retorne:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os pedidos com data de emissão menor que Janeiro de 2017.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
FROM TB_PEDIDO
WHERE DATA_EMISSAO<'2017.1.1'`,
  },
];

const lab06B_9: LabSections = [
  {
    sectionType: 'title',
    content: '9. Retorne:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os pedidos que foram emitidos em Janeiro de 2017 em uma sexta-feira.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
FROM TB_PEDIDO
WHERE YEAR(DATA_EMISSAO)=2017
AND MONTH(DATA_EMISSAO) = 1
AND DATEPART(WEEKDAY, DATA_EMISSAO) = 6`,
  },
];

const lab06BData: LabData = [lab06B_1, lab06B_2, lab06B_3, lab06B_4, lab06B_5, lab06B_6, lab06B_7, lab06B_8, lab06B_9];

export default lab06BData;
