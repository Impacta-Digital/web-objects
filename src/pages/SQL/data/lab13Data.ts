import type { LabSections, LabData } from '../types/LabData';

const lab13_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Apresente:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os cargos que não possuem associação na tabela de empregado.',
  },
  {
    sectionType: 'response',
    content: `SELECT COD_CARGO
FROM TB_CARGO
EXCEPT
SELECT COD_CARGO
FROM TB_EMPREGADO`,
  },
];

const lab13_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Crie a tabela __TB_MAIOR_SALARIO__',
  },
  {
    sectionType: 'paragraph',
    content: 'A tabela deve conter as seguintes colunas:',
  },
  {
    sectionType: 'list',
    content: ['COD_DEPTO', 'NOME', 'DATA_NASCIMENTO', 'TABELA TB_EMPREGADO', 'FILTRO SALARIO>5000'],
  },
  {
    sectionType: 'response',
    content: `SELECT COD_DEPTO
      ,NOME
      ,DATA_NASCIMENTO
INTO TB_MAIOR_SALARIO
FROM TB_EMPREGADO
WHERE SALARIO>5000`,
  },
];

const lab13_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Usando a tabela __TB_MAIOR_SALARIO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Exiba os registros que são comuns para as tabelas __TB_MAIOR_SALARIO__ e __TB_EMPREGADO__.',
  },
  {
    sectionType: 'response',
    content: `SELECT COD_DEPTO
      , NOME
      , DATA_NASCIMENTO
FROM TB_EMPREGADO
INTERSECT
SELECT COD_DEPTO
      , NOME
      , DATA_NASCIMENTO
FROM TB_MAIOR_SALARIO`,
  },
];

const lab13_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Faça uma query para:',
  },
  {
    sectionType: 'paragraph',
    content:
      'Exibir a coluna __NOME__ da tabela __TB_EMPREGADO__ e a coluna __NOME__ da tabela __TB_VENDEDOR__ no mesmo result set (resultado da query).',
  },
  {
    sectionType: 'response',
    content: `SELECT NOME, 'EMPREGADO' AS TABELA
FROM TB_EMPREGADO
UNION
SELECT NOME, 'VENDEDOR'
FROM TB_VENDEDOR
ORDER BY TABELA`,
  },
];

const lab13_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Faça uma query para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Exibir a coluna __NOME__ da tabela __TB_EMPREGADO__ e a coluna __NOME__ da tabela __TB_MAIOR_SALARIO__.',
  },
  {
    sectionType: 'paragraph',
    content: 'O resultado deve manter os registros duplicados.',
  },
  {
    sectionType: 'response',
    content: `SELECT NOME AS EMPREGADO
FROM TB_EMPREGADO
UNION ALL
SELECT NOME AS EMP_MAIOR_SALARIO
FROM TB_MAIOR_SALARIO
ORDER BY 1`,
  },
];

const lab13_6: LabSections = [
  {
    sectionType: 'title',
    content: '6. Crie os seguintes UDDTs:',
  },
  {
    sectionType: 'list',
    content: [
      'TIPO_CODIGO INT NOT NULL',
      'TIPO_ENDERECO VARCHAR(60) NOT NULL',
      'TIPO_FONE CHAR(14) NULL',
      'TIPO_SEXO CHAR(1) NOT NULL',
      'TIPO_ALIQUOTA NUMERIC(4,2) NULL',
      'TIPO_PRAZO INT NOT NULL',
    ],
  },
  {
    sectionType: 'response',
    content: `CREATE TYPE TIPO_CODIGO
FROM INT NOT NULL;

CREATE TYPE TIPO_ENDERECO
FROM VARCHAR(60) NOT NULL;

CREATE TYPE TIPO_FONE
FROM CHAR(14) NULL;

CREATE TYPE TIPO_SEXO
FROM CHAR(1) NOT NULL;

CREATE TYPE TIPO_ALIQUOTA
FROM NUMERIC(4,2) NULL;

CREATE TYPE TIPO_PRAZO
FROM INT NOT NULL;`,
  },
];

const lab13_7: LabSections = [
  {
    sectionType: 'title',
    content: '7. Crie a tabela __PESSOAS__',
  },
  {
    sectionType: 'paragraph',
    content: 'Siga o modelo adiante:',
  },
  {
    sectionType: 'list',
    content: [
      'PESSOAS',
      'COD_PESSOA TIPO_CODIGO - autonumeração chave primária',
      'NOME VARCHAR(30)',
      'ENDERECO TIPO_ENDERECO',
      'SEXO TIPO_SEXO',
    ],
  },
  {
    sectionType: 'response',
    content: `CREATE TABLE PESSOAS
( COD_PESSOA TIPO_CODIGO IDENTITY(1,1) PRIMARY KEY
      ,NOME VARCHAR(30)
      ,ENDERECO TIPO_ENDERECO
      ,SEXO TIPO_SEXO )`,
  },
];

const lab13_8: LabSections = [
  {
    sectionType: 'title',
    content: '8. Crie a tabela __FUNCIONARIO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Siga o modelo adiante:',
  },
  {
    sectionType: 'list',
    content: [
      'Funcionario',
      'COD_FUNC TIPO_CODIGO - chave primária',
      'NOME VARCHAR(30)',
      'ENDERECO VARCHAR(80)',
      'SEXO TIPO_SEXO',
    ],
  },
  {
    sectionType: 'response',
    content: `CREATE TABLE FUNCIONARIO
(
      COD_FUNC TIPO_CODIGO PRIMARY KEY
      ,NOME VARCHAR(30)
      ,ENDERECO VARCHAR(80)
      ,SEXO TIPO_SEXO
)`,
  },
];

const lab13_9: LabSections = [
  {
    sectionType: 'title',
    content: '9. Crie:',
  },
  {
    sectionType: 'paragraph',
    content: 'Um sinônimo de nome __TB_FUNCIONARIO__ para a tabela __FUNCIONARIO__.',
  },
  {
    sectionType: 'response',
    content: `CREATE SYNONYM TB_FUNCIONARIO FOR DBO.FUNCIONARIO`,
  },
];

const lab13_10: LabSections = [
  {
    sectionType: 'title',
    content: '10. Crie:',
  },
  {
    sectionType: 'paragraph',
    content: 'Uma __SEQUENCE__ de nome __SQ_FUNCIONARIO__, que inicie em 100 com incremento 2.',
  },
  {
    sectionType: 'response',
    content: `CREATE SEQUENCE SQ_FUNCIONARIO
START WITH 100
INCREMENT BY 2`,
  },
];

const lab13_11: LabSections = [
  {
    sectionType: 'title',
    content: '11. Crie a tabela __TB_FUNC_IDADE__',
  },
  {
    sectionType: 'paragraph',
    content: 'A tabela deve conter os seguintes campos:',
  },
  {
    sectionType: 'list',
    content: [
      'Id_funcionario - inteiro, auto numerável e chave primária',
      'Nome do funcionário - alfanumérico com 50 caracteres',
      'Data de Nascimento - campo data',
      'Idade - campo calculado como definido a seguir:',
    ],
  },
  {
    sectionType: 'paragraph',
    content: 'CAST (FLOOR (CAST (GETDATE() - data_nascimento AS FLOAT) / 365.25) AS INT',
  },
  {
    sectionType: 'response',
    content: `CREATE TABLE TB_FUNC_IDADE
(
      Id_funcionario INT IDENTITY(1,1) PRIMARY KEY
      ,FUNCIONARIO VARCHAR(50)
      ,Data_Nascimento DATETIME
      ,Idade AS CAST (FLOOR (CAST (GETDATE() - data_nascimento AS FLOAT) / 365.25) AS INT )
)`,
  },
];

const lab13_12: LabSections = [
  {
    sectionType: 'title',
    content: '12. Insira:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os dados da tabela de empregados na tabela __TB_FUNC_IDADE__.',
  },
  {
    sectionType: 'response',
    content: `INSERT INTO TB_FUNC_IDADE
SELECT NOME, DATA_NASCIMENTO FROM TB_EMPREGADO`,
  },
];

const lab13_13: LabSections = [
  {
    sectionType: 'title',
    content: '13. Na tabela __TB_FUNC_IDADE__',
  },
  {
    sectionType: 'paragraph',
    content: 'Consulte as informações e verifique o campo calculado.',
  },
  {
    sectionType: 'response',
    content: `SELECT * FROM TB_FUNC_IDADE`,
  },
];

const lab13Data: LabData = [
  lab13_1,
  lab13_2,
  lab13_3,
  lab13_4,
  lab13_5,
  lab13_6,
  lab13_7,
  lab13_8,
  lab13_9,
  lab13_10,
  lab13_11,
  lab13_12,
  lab13_13,
];

export default lab13Data;
