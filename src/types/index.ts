export type Tab = "Profile" | "Skill" | "Project" | "Website Ini?";

export interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}
