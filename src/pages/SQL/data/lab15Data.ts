import type { LabSections, LabData } from '../types/LabData';

const lab15_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Receber dois números inteiros e exibir o produto (multiplicação) desses dois números.',
  },
  {
    sectionType: 'response',
    content: `DECLARE @VALOR1 INT
,@VALOR2 INT
,@RESULTADO INT

SET @VALOR1=2
SET @VALOR2=3
SET @RESULTADO=@VALOR1 * @VALOR2

PRINT @RESULTADO`,
  },
];

const lab15_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Receber dois números inteiros e exibir o número maior.',
  },
  {
    sectionType: 'response',
    content: `DECLARE @NUM1 INT
,@NUM2 INT
,@NUM_MAIOR CHAR(20)

SET @NUM1=10
SET @NUM2=37

SELECT @NUM_MAIOR=CASE
WHEN @NUM1>@NUM2 THEN CONCAT('MAIOR_VALOR=',@NUM1)
ELSE CONCAT('MAIOR_VALOR=',@NUM2)
END

SELECT @NUM_MAIOR AS MAIOR_VALOR`,
  },
];

const lab15_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Receber o código do produto e exibir o nome do produto cujo código foi informado.',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS

DECLARE @CODPROD INT
,@NOMEPROD CHAR(30)

SET @CODPROD = 45

SELECT @NOMEPROD=DESCRICAO
FROM TB_PRODUTO
WHERE ID_PRODUTO=@CODPROD

SELECT @NOMEPROD AS DESCRICAO_PRODUTO`,
  },
];

const lab15_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Receber o código do produto.',
  },
  {
    sectionType: 'paragraph',
    content:
      'Exiba a descrição do produto, mas somente o primeiro nome do produto (primeira palavra que compõe o nome do produto).',
  },
  {
    sectionType: 'response',
    content: `DECLARE @CDPROD INT
SET @CDPROD=77

SELECT SUBSTRING(DESCRICAO,1,CHARINDEX(' ',DESCRICAO)) AS DESCRICAO
FROM TB_PRODUTO
WHERE ID_PRODUTO=@CDPROD`,
  },
];

const lab15_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Crie uma procedure para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir o nome do cliente, telefone e o número de seus pedidos.',
  },
  {
    sectionType: 'response',
    content: `CREATE PROCEDURE SP_PEDIDOS_CLIENTE
AS
BEGIN
SELECT CLI.CODCLI
,CLI.NOME
,cli.FONE1
,PED.NUM_PEDIDO
FROM TB_PEDIDO AS PED
INNER JOIN TB_CLIENTE AS CLI
ON PED.CODCLI=CLI.CODCLI
END

EXEC SP_PEDIDOS_CLIENTE`,
  },
];

const lab15Data: LabData = [lab15_1, lab15_2, lab15_3, lab15_4, lab15_5];

export default lab15Data;
