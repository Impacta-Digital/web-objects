import type { LabSections, LabData } from '../types/LabData';

// ==================== A ====================

const lab12A_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque o banco de dados __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

const lab12A_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Alterar a tabela __TB_CARGO__, mudando o salário inicial do cargo __DIRETOR__ para 2500,00.',
  },
  {
    sectionType: 'response',
    content: `UPDATE TB_CARGO
SET SALARIO_INIC = 2500
WHERE CARGO='DIRETOR'`,
  },
];

const lab12A_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Crie um script para:',
  },
  {
    sectionType: 'paragraph',
    content: 'Alterar a tabela de cargos, estipulando 10% de aumento para o campo __SALARIO_INIC__ de todos os cargos.',
  },
  {
    sectionType: 'response',
    content: `UPDATE TB_CARGO
SET SALARIO_INIC = SALARIO_INIC * 1.10`,
  },
];

const lab12A_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Faça um script para:',
  },
  {
    sectionType: 'paragraph',
    content:
      'Alterar o campo __ICMS__ da tabela __TB_CLIENTE__ para 12. Considere apenas clientes dos estados: __RJ__, __RO__, __AC__, __RR__, __MG__, __PR__, __SC__.',
  },
  {
    sectionType: 'response',
    content: `UPDATE TB_CLIENTE
SET ICMS = 12
OUTPUT inserted.CODCLI
      ,deleted.ICMS AS ICMS_ANTERIOR
      ,inserted.ICMS AS ICMS_ATUAL
FROM TB_CLIENTE AS CLI
WHERE CLI.ESTADO IN ('RJ', 'RO', 'AC', 'RR', 'MG', 'PR', 'SC')`,
  },
];

const lab12AData: LabData = [lab12A_1, lab12A_2, lab12A_3, lab12A_4];

// ==================== B ====================

const lab12B_1: LabSections = [
  {
    sectionType: 'title',
    content: 'SET UP',
  },
  {
    sectionType: 'paragraph',
    content: 'Crie uma cópia da tabela __TB_EMPREGADO__ com o nome __TBEMP_TEMP__.',
  },
  {
    sectionType: 'paragraph',
    content: 'Use a tabela __TBEMP_TEMP__ para realizar os exercícios abaixo.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
INTO TBEMP_TEMP
FROM TB_EMPREGADO`,
  },
];

const lab12B_2: LabSections = [
  {
    sectionType: 'title',
    content: '1. Apague:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os registros do departamento 2.',
  },
  {
    sectionType: 'response',
    content: `BEGIN TRAN
DELETE
FROM TBEMP_TEMP
WHERE COD_DEPTO=2
ROLLBACK`,
  },
];

const lab12B_3: LabSections = [
  {
    sectionType: 'title',
    content: '2. Apague:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os registros que possuem a coluna __SALARIO NULL__.',
  },
  {
    sectionType: 'response',
    content: `BEGIN TRAN
DELETE
FROM TBEMP_TEMP
WHERE SALARIO IS NULL
ROLLBACK`,
  },
];

const lab12B_4: LabSections = [
  {
    sectionType: 'title',
    content: '3. Apague:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os registros dos cargos __3__, __5__ e __8__.',
  },
  {
    sectionType: 'response',
    content: `BEGIN TRAN
DELETE
FROM TBEMP_TEMP
WHERE COD_CARGO IN (3,5,8)
ROLLBACK`,
  },
];

const lab12B_5: LabSections = [
  {
    sectionType: 'title',
    content: '4. Crie:',
  },
  {
    sectionType: 'paragraph',
    content: 'Uma cópia da tabela __TB_CLIENTE__ com o nome __TBEMP_CLI__.',
  },
  {
    sectionType: 'paragraph',
    content: 'Use a tabela __TBEMP_CLI__ para realizar os exercícios abaixo.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
INTO TBEMP_CLI
FROM TB_CLIENTE`,
  },
];

const lab12B_6: LabSections = [
  {
    sectionType: 'title',
    content: '5. Apague:',
  },
  {
    sectionType: 'paragraph',
    content: 'Os registros que estão com Estado __NULL__.',
  },
  {
    sectionType: 'response',
    content: `BEGIN TRAN
DELETE
FROM TBEMP_CLI
WHERE ESTADO IS NULL
ROLLBACK`,
  },
];

const lab12BData: LabData = [lab12B_1, lab12B_2, lab12B_3, lab12B_4, lab12B_5, lab12B_6];

export { lab12AData, lab12BData };
