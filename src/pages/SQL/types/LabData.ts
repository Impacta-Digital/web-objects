interface SectionTitle {
  sectionType: 'title';
  content: string;
}

interface SectionParagraph {
  sectionType: 'paragraph';
  content: string;
}

interface SectionList {
  sectionType: 'list';
  content: string[];
}

interface SectionResponse {
  sectionType: 'response';
  content: string;
}

export type LabData = LabSections[];
export type LabSections = (SectionTitle | SectionParagraph | SectionList | SectionResponse)[];
