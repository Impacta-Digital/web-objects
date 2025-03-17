import type { LabSections, LabData } from '../types/LabData';

const lab05_1: LabSections = [
  {
    sectionType: 'title',
    content: '1. Coloque o banco de dados __SISTEMA_ACADEMICO__ em uso',
  },
  {
    sectionType: 'response',
    content: `USE SISTEMA_ACADEMICO`,
  },
];

const lab05_2: LabSections = [
  {
    sectionType: 'title',
    content: '2. Na tabela __TB_CARGO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Insira os registros abaixo, utilizando Insert Declarativo.',
  },
  {
    sectionType: 'list',
    content: [
      'SUPERVISORA COMERCIAL',
      'QUALIDADE',
      'DIRETOR',
      'COMPRADOR(A)',
      'VENDEDOR(A)',
      'REPRESENTANTE DA DIREÇÃO',
      'MOTORISTA',
      'ENG MANUFATURA',
      'COZINHEIRO',
      'AUXILIAR LABORATORIO',
    ],
  },
  {
    sectionType: 'response',
    content: `INSERT INTO TB_CARGO(COD_CARGO,CARGO)
VALUES(1,'SUPERVISORA COMERCIAL')
     ,(2,'QUALIDADE')
     ,(3,'DIRETOR')
     ,(4,'COMPRADOR(A)')
     ,(5,'VENDEDOR(A)')
     ,(6,'REPRESENTANTE DA DIREÇÃO')
     ,(7,'MOTORISTA')
     ,(8,'ENG MANUFATURA')
     ,(9,'COZINHEIRO')
     ,(10,'AUXILIAR LABORATORIO')`,
  },
];

const lab05_3: LabSections = [
  {
    sectionType: 'title',
    content: '3. Na tabela __TB_CARGO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Insira os registros abaixo, utilizando Insert Posicional.',
  },
  {
    sectionType: 'list',
    content: [
      'GERENTE COMPRAS',
      'AUXILIAR DE MANUTENÇÃO',
      'GERENTE ADMINISTRATIVO',
      'TORNEIRO MECÂNICO',
      'SUPERVISOR',
      'GERENTE DE PRODUÇÃO',
      'QUÍMICO',
    ],
  },
  {
    sectionType: 'response',
    content: `INSERT INTO TB_CARGO
VALUES(11,'GERENTE COMPRAS')
     ,(12,'AUXILIAR DE MANUTENÇÃO')
     ,(13,'GERENTE ADMINISTRATIVO')
     ,(14,'TORNEIRO MECÂNICO')
     ,(15,'SUPERVISOR')
     ,(16,'GERENTE DE PRODUÇÃO')
     ,(17,'QUÍMICO')`,
  },
];

const lab05_4: LabSections = [
  {
    sectionType: 'title',
    content: '4. Na tabela __TB_DISCIPLINA__',
  },
  {
    sectionType: 'paragraph',
    content: 'Insira os registros abaixo:',
  },
  {
    sectionType: 'list',
    content: ['MATEMÁTICA', 'HISTÓRIA', 'GEOGRAFIA', 'LINGUA PORTUGUESA', 'INGLÊS', 'CIÊNCIAS'],
  },
  {
    sectionType: 'response',
    content: `INSERT INTO TB_DISCIPLINA(COD_DISCIPLINA,NOME_DISCIPLINA)
VALUES(1,'MATEMÁTICA')
     ,(2,'HISTÓRIA')
     ,(3,'GEOGRAFIA')
     ,(4,'LINGUA PORTUGUESA')
     ,(5,'INGLÊS')
     ,(6,'CIÊNCIAS')`,
  },
];

const lab05_5: LabSections = [
  {
    sectionType: 'title',
    content: '5. Na tabela __TB_ALUNO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Insira os registros abaixo:',
  },
  {
    sectionType: 'list',
    content: [
      'NOME: MARINALVA DA SILVA',
      'CPF_ALUNO: 14534423423',
      'COD_CARGO: 5',
      'END_ALUNO: R.COMENDADOR JOSE ZILLO,401',
      'BAIRRO_ALUNO: PQ. DOS OCACIS',
      'CIDADE_ALUNO: ASSIS',
      'ESTADO_ALUNO: SP',
      'CEP_ALUNO: 19800000',
      'FONE: 1124516577',
      'STATUS_ALUNO: A',
      'DATA_CAD_ALUNO: DATA_ATUAL',
    ],
  },
  {
    sectionType: 'response',
    content: `INSERT INTO TB_ALUNO (NOME
,CPF_ALUNO
,COD_CARGO
,END_ALUNO
,BAIRRO_ALUNO
,CIDADE_ALUNO
,ESTADO_ALUNO
,CEP_ALUNO
,FONE
,STATUS_ALUNO
,DATA_CAD_ALUNO)
VALUES('MARINALVA DA SILVA'
      ,14534423423
      ,5
      ,'R.COMENDADOR JOSE ZILLO,401'
      ,'PQ. DOS OCACIS'
      ,'ASSIS'
      ,'SP'
      ,'19800000'
      ,'1124516577'
      ,'A'
      ,GETDATE())`,
  },
];

const lab05_6: LabSections = [
  {
    sectionType: 'title',
    content: '6. Na tabela __TB_ALUNO__',
  },
  {
    sectionType: 'paragraph',
    content: 'Insira mais dois registros, listados abaixo:',
  },
  {
    sectionType: 'list',
    content: [
      'NOME: ALINE ALVES',
      'CPF_ALUNO: 23434427422',
      'COD_CARGO: 13',
      'END_ALUNO: R.OLIVEIRA DE SÁ,47',
      'BAIRRO_ALUNO: PQ. DAS OLIVEIRAS',
      'CIDADE_ALUNO: SÃO PAULO',
      'ESTADO_ALUNO: SP',
      'CEP_ALUNO: 07865000',
      'FONE: 1132753422',
      'STATUS_ALUNO: A',
      'DATA_CAD_ALUNO: DATA_ATUAL',
    ],
  },
  {
    sectionType: 'list',
    content: [
      'NOME: ANTONIA GOMES',
      'CPF_ALUNO: 17423354566',
      'COD_CARGO: 1',
      'END_ALUNO: R. PADRE OLIVEIRA,322',
      'BAIRRO_ALUNO: VILA MATILDE',
      'CIDADE_ALUNO: SÃO PAULO',
      'ESTADO_ALUNO: SP',
      'CEP_ALUNO: 02532010',
      'FONE: 1126745155',
      'STATUS_ALUNO: A',
      'DATA_CAD_ALUNO: DATA_ATUAL',
    ],
  },
  {
    sectionType: 'response',
    content: `INSERT INTO TB_ALUNO
VALUES('ALINE ALVES'
      ,23434427422
      ,13
      ,'R.OLIVEIRA DE SÁ,47'
      ,'PQ. DAS OLIVEIRAS'
      ,'SÃO PAULO'
      ,'SP'
      ,'07865000'
      ,'1132753422'
      ,'A'
      ,GETDATE())
      ,('ANTONIA GOMES'
      ,17423354566
      ,1
      ,'R. PADRE OLIVEIRA,322'
      ,'VILA MATILDE'
      ,'SÃO PAULO'
      ,'SP'
      ,'02532010'
      ,'1126745155'
      ,'A'
      ,GETDATE())`,
  },
];

const lab05_7: LabSections = [
  {
    sectionType: 'title',
    content: '7. Na tabela __TB_ALUNO_DISCIPLINA__',
  },
  {
    sectionType: 'paragraph',
    content: 'Insira os registros abaixo:',
  },
  {
    sectionType: 'list',
    content: [
      'A aluna Aline Alves cursa as disciplinas: História/Língua Portuguesa/Inglês',
      'A aluna Antonia Gomes cursa as disciplinas: História/Geografia/Ciências',
    ],
  },
  {
    sectionType: 'response',
    content: `INSERT INTO TB_ALUNO_DISCIPLINA
VALUES(1,2,2)
     ,(2,2,4)
     ,(3,2,5)
INSERT INTO TB_ALUNO_DISCIPLINA
VALUES(4,3,2)
     ,(5,3,3)
     ,(6,3,6)`,
  },
];

const lab05Data: LabData = [lab05_1, lab05_2, lab05_3, lab05_4, lab05_5, lab05_6, lab05_7];

export default lab05Data;
