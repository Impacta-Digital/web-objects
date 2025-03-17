import type { LabSections, LabData } from '../types/LabData';

const lab02_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Crie o banco __SISTEMA_ACADEMICO__',
  },
  {
    sectionType: 'response',
    content: `CREATE DATABASE SISTEMA_ACADEMICO`,
  },
];

const lab02_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Coloque o banco __SISTEMA_ACADEMICO__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE SISTEMA_ACADEMICO`,
  },
];

const lab02_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Crie a tabela __TB_CARGO__',
  },
  {
    sectionType: 'paragraph',
    content: 'A tabela deve conter as seguintes colunas:',
  },
  {
    sectionType: 'list',
    content: ['COD_CARGO INT - PK', 'CARGO VARCHAR(30)'],
  },
  {
    sectionType: 'response',
    content: `CREATE TABLE TB_CARGO
(COD_CARGO INT
,CARGO VARCHAR(30)
,CONSTRAINT PK_CARGO_CODCARGO PRIMARY KEY(COD_CARGO)
)`,
  },
];

const lab02_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Crie a tabela __TB_DISCIPLINA__',
  },
  {
    sectionType: 'paragraph',
    content: 'A tabela deve conter as seguintes colunas:',
  },
  {
    sectionType: 'list',
    content: ['COD_DISCIPLINA INT - PK', 'NOME_DISCIPLINA VARCHAR(30)'],
  },
  {
    sectionType: 'response',
    content: `CREATE TABLE TB_DISCIPLINA
(COD_DISCIPLINA INT
,NOME_DISCIPLINA VARCHAR(30)
,CONSTRAINT PK_DISCIPLINA_CODDISP PRIMARY KEY(COD_DISCIPLINA)
)`,
  },
];

const lab02_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Crie a tabela __TB_ALUNO__',
  },
  {
    sectionType: 'paragraph',
    content: 'A tabela deve conter as seguintes colunas:',
  },
  {
    sectionType: 'list',
    content: [
      'COD_ALUNO INT AUTONUMERACAO(1,1) - PK',
      'NOME VARCHAR(50) NOT NULL',
      'CPF_ALUNO BIGINT NOT NULL',
      'COD_CARGO INT NOT NULL - FK',
      'END_ALUNO VARCHAR(60) NOT NULL',
      'BAIRRO_ALUNO VARCHAR(20) NULL',
      'CIDADE_ALUNO VARCHAR(20) NULL',
      'ESTADO_ALUNO CHAR(2) NULL',
      'CEP_ALUNO CHAR(8) NULL',
      'FONE CHAR(11) NULL',
      'STATUS_ALUNO CHAR(1)',
      'DATA_CAD_ALUNO DATE NOT NULL',
    ],
  },
  {
    sectionType: 'response',
    content: `CREATE TABLE TB_ALUNO
(COD_ALUNO INT IDENTITY(1,1)
,NOME VARCHAR(50) NOT NULL
,CPF_ALUNO INT NOT NULL
,COD_CARGO INT NOT NULL
,END_ALUNO VARCHAR(60) NOT NULL
,BAIRRO_ALUNO VARCHAR(20) NULL
,CIDADE_ALUNO VARCHAR(20) NULL
,ESTADO_ALUNO CHAR(2) NULL
,CEP_ALUNO CHAR(8) NULL
,FONE CHAR(11) NULL
,STATUS_ALUNO CHAR(1)
,DATA_CAD_ALUNO DATE NOT NULL
,CONSTRAINT PK_ALUNO_COD PRIMARY KEY(COD_ALUNO)
)`,
  },
];

const lab02_6: LabSections = [
  {
    sectionType: 'title',
    content: '6. Na tabela __TB_ALUNO__, adicione:',
  },
  {
    sectionType: 'paragraph',
    content: 'Chave estrangeira para a coluna __COD_CARGO__',
  },
  {
    sectionType: 'response',
    content: `ALTER TABLE TB_ALUNO
ADD
CONSTRAINT FK_ALUNO_CODCARGO FOREIGN KEY(COD_CARGO)
REFERENCES TB_CARGO(COD_CARGO)`,
  },
];

const lab02_7: LabSections = [
  {
    sectionType: 'title',
    content: '7. Altere o tipo de dados da coluna __CPF_ALUNO__',
  },
  {
    sectionType: 'paragraph',
    content: 'O novo tipo deve ser __BIGINT NOT NULL__',
  },
  {
    sectionType: 'response',
    content: `ALTER TABLE TB_ALUNO
ALTER COLUMN CPF_ALUNO BIGINT NOT NULL`,
  },
];

const lab02_8: LabSections = [
  {
    sectionType: 'title',
    content: '8. O campo __STATUS_ALUNO__ deve receber somente:',
  },
  {
    sectionType: 'paragraph',
    content: '"A" para Ativo e "I" para Inativo',
  },
  {
    sectionType: 'response',
    content: `ALTER TABLE TB_ALUNO
ADD
CONSTRAINT CK_ALUNO_STATUS CHECK(STATUS_ALUNO IN ('A','I'))`,
  },
];

const lab02_9: LabSections = [
  {
    sectionType: 'title',
    content: '9. Crie a tabela __TB_ALUNO_DISCIPLINA__',
  },
  {
    sectionType: 'paragraph',
    content: 'A tabela deve conter as disciplinas que o aluno cursa.',
  },
  {
    sectionType: 'response',
    content: `CREATE TABLE TB_ALUNO_DISCIPLINA
(COD_ALUNO_DISCIP INT NOT NULL
,COD_ALUNO INT
,COD_DISCIPLINA INT
)`,
  },
];

const lab02_10: LabSections = [
  {
    sectionType: 'title',
    content: '10. Na tabela __TB_ALUNO_DISCIPLINA__, adicione:',
  },
  {
    sectionType: 'paragraph',
    content: 'Chave primária para a coluna __COD_ALUNO_DISCIP__',
  },
  {
    sectionType: 'paragraph',
    content: 'Chave estrangeira para as colunas __COD_ALUNO__ e __COD_DISCIPLINA__',
  },
  {
    sectionType: 'response',
    content: `ALTER TABLE TB_ALUNO_DISCIPLINA
ADD
CONSTRAINT PK_ALUNO_DISCIPL_CODIGO PRIMARY KEY(COD_ALUNO_DISCIP)
,CONSTRAINT FK_ALUNO_DISCIPL_CODALUNO FOREIGN KEY(COD_ALUNO)
REFERENCES TB_ALUNO(COD_ALUNO)
,CONSTRAINT FK_ALUNO_DISCIPL_CODDISCIPL FOREIGN KEY(COD_DISCIPLINA)
REFERENCES TB_DISCIPLINA(COD_DISCIPLINA)`,
  },
];

const lab02_11: LabSections = [
  {
    sectionType: 'title',
    content: '11. Na tabela __TB_ALUNO__, adicione:',
  },
  {
    sectionType: 'paragraph',
    content: 'Constraint __UNIQUE__ na coluna __CPF_ALUNO__',
  },
  {
    sectionType: 'response',
    content: `ALTER TABLE TB_ALUNO
ADD
CONSTRAINT UN_ALUNO_CPF UNIQUE(CPF_ALUNO)`,
  },
];

const lab02_12: LabSections = [
  {
    sectionType: 'title',
    content: '12. A coluna __DATA_CAD_ALUNO__ deve receber:',
  },
  {
    sectionType: 'paragraph',
    content: 'Por default, a data atual.',
  },
  {
    sectionType: 'response',
    content: `ALTER TABLE TB_ALUNO
ADD
CONSTRAINT DF_ALUNO_DATACADAL
DEFAULT GETDATE() FOR DATA_CAD_ALUNO`,
  },
];

const lab02Data: LabData = [
  lab02_1,
  lab02_2,
  lab02_3,
  lab02_4,
  lab02_5,
  lab02_6,
  lab02_7,
  lab02_8,
  lab02_9,
  lab02_10,
  lab02_11,
  lab02_12,
];

export default lab02Data;
