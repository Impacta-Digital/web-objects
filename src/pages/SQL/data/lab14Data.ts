import type { LabSections, LabData } from '../types/LabData';

const lab14_1: LabSections = [
  {
    sectionType: 'paragraph',
    content: 'A. Crie a tabela __TEMP_CARGO__ a partir da tabela __TB_CARGO__.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
INTO TEMP_CARGO
FROM TB_CARGO

SELECT * FROM TB_CARGO`,
  },
  {
    sectionType: 'paragraph',
    content: 'B. Apague os registros com códigos de cargo __5__, __9__ e __10__ da tabela __TEMP_CARGO__.',
  },
  {
    sectionType: 'response',
    content: `DELETE
FROM TEMP_CARGO
WHERE COD_CARGO IN (5,9,10)`,
  },
  {
    sectionType: 'paragraph',
    content: 'C. Atualize em 10% o __SALARIO_INIC__ dos códigos de cargo __4__ e __12__.',
  },
  {
    sectionType: 'response',
    content: `UPDATE TEMP_CARGO
SET SALARIO_INIC=SALARIO_INIC *1.10
WHERE COD_CARGO IN (4,12)`,
  },
];

const lab14_2: LabSections = [
  {
    sectionType: 'title',
    content: '1. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Comparar as tabelas __TEMP_CARGO__ e __TB_CARGO__ e realizar os passos:',
  },
  {
    sectionType: 'list',
    content: [
      'Atualizar a coluna SALARIO_INIC com o SALARIO_INIC da tabela TB_CARGO, quando estiverem diferentes.',
      'Inserir, na tabela TEMP_CARGO, os registros de cargo quando estes não existirem na tabela.',
    ],
  },
  {
    sectionType: 'response',
    content: `SET IDENTITY_INSERT TEMP_CARGO ON

MERGE TEMP_CARGO AS EMPCARGO --TABELA ALVO
USING TB_CARGO AS CARGO --TABELA FONTE
ON EMPCARGO.COD_CARGO=CARGO.COD_CARGO

WHEN MATCHED AND EMPCARGO.SALARIO_INIC <> CARGO.SALARIO_INIC THEN
      UPDATE
      SET EMPCARGO.SALARIO_INIC=CARGO.SALARIO_INIC

WHEN NOT MATCHED THEN
      INSERT(COD_CARGO,CARGO,SALARIO_INIC)
      VALUES(COD_CARGO,CARGO,SALARIO_INIC);

SET IDENTITY_INSERT TEMP_CARGO OFF`,
  },
];

const lab14_3: LabSections = [
  {
    sectionType: 'title',
    content: '2. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Manter os dados em memória:',
  },
  {
    sectionType: 'list',
    content: ['NUM_PEDIDO', 'NOME DO CLIENTE', 'DATA_EMISSAO', 'VLR_TOTAL'],
  },
  {
    sectionType: 'response',
    content: `WITH DADOS_PED
AS
(SELECT PED.NUM_PEDIDO
      ,CLI.NOME
      ,PED.DATA_EMISSAO
      ,PED.VLR_TOTAL
FROM TB_PEDIDO AS PED
INNER JOIN TB_CLIENTE AS CLI
ON PED.CODCLI=CLI.CODCLI)

SELECT *
FROM DADOS_PED`,
  },
];

const lab14_4: LabSections = [
  {
    sectionType: 'title',
    content: '3. Crie uma visão para exibir:',
  },
  {
    sectionType: 'list',
    content: ['NUM_PEDIDO', 'DATA_EMISSAO', 'NOME DO CLIENTE'],
  },
  {
    sectionType: 'response',
    content: `CREATE VIEW VW_COMPRAS_CLIENTE
WITH SCHEMABINDING
AS
SELECT NUM_PEDIDO
      ,DATA_EMISSAO
      ,CLI.NOME AS NOME_CLIENTE
FROM DBO.TB_PEDIDO AS PED
INNER JOIN DBO.TB_CLIENTE AS CLI
ON PED.CODCLI=CLI.CODCLI`,
  },
];

const lab14_5: LabSections = [
  {
    sectionType: 'title',
    content: '4. Crie:',
  },
  {
    sectionType: 'paragraph',
    content: 'Um índice para a view criada no exercício anterior, para a coluna __NUM_PEDIDO__.',
  },
  {
    sectionType: 'response',
    content: `CREATE UNIQUE CLUSTERED INDEX NDX_NUMPED
ON VW_COMPRAS_CLIENTE(NUM_PEDIDO)`,
  },
];

const lab14Data: LabData = [lab14_1, lab14_2, lab14_3, lab14_4, lab14_5];

export default lab14Data;
