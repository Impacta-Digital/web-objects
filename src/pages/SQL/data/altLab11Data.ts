import type { LabSections, LabData } from '../types/LabData';

const lab11_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque o banco de dados __PEDIDOS__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE PEDIDOS`,
  },
];

const lab11_2: LabSections = [
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

const lab11_3: LabSections = [
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

const lab11_4: LabSections = [
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

const lab11Data: LabData = [lab11_1, lab11_2, lab11_3, lab11_4];

export default lab11Data;
