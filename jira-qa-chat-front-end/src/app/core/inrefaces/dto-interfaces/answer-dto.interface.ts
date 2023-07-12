export interface AnswerDtoInterface {
  answer: string;
  source_documents: Document[];
}

export interface Document {
  page_content: string;
  metadata: {
    source: string;
    row: number;
  };
}