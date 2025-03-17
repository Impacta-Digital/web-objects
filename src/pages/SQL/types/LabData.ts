interface SectionBase {
  sectionType: 'title' | 'paragraph' | 'list' | 'response';
}

interface SectionTitle extends SectionBase {
  sectionType: 'title';
  content: string;
}

interface SectionParagraph extends SectionBase {
  sectionType: 'paragraph';
  content: string;
}

interface SectionList extends SectionBase {
  sectionType: 'list';
  content: string[];
}

interface SectionResponse extends SectionBase {
  sectionType: 'response';
  content: string;
}

export type LabData = LabSections[];
export type LabSections = (SectionTitle | SectionParagraph | SectionList | SectionResponse)[];
