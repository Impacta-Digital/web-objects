import type { LabSections, LabData } from '../types/LabData';

const lab12_1: LabSections = [
  {
    sectionType: 'title',
    content: 'PREPARE O LABORATÓRIO',
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

const lab12_2: LabSections = [
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

const lab12_3: LabSections = [
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

const lab12_4: LabSections = [
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

const lab12_5: LabSections = [
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
    content: 'Use a tabela __TBEMP_CLI__ para realizar o exercício abaixo.',
  },
  {
    sectionType: 'response',
    content: `SELECT *
INTO TBEMP_CLI
FROM TB_CLIENTE`,
  },
];

const lab12_6: LabSections = [
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

const lab12Data: LabData = [lab12_1, lab12_2, lab12_3, lab12_4, lab12_5, lab12_6];

export default lab12Data;
