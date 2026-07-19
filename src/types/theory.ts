export interface TheorySection {
  id: string;
  title: string;
  type: "text" | "points" | "table" | "qa" | "summary";
  content?: string;
  points?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  qa?: {
    q: string;
    a: string;
  }[];
}

export interface TheoryData {
  chapterId: string;
  chapterTitle: string;
  description: string;
  sections: TheorySection[];
}
