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

export interface MenuButton {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface SkillCardProps {
  stackName: string;
}

export interface LogoProps {
  className?: string;
}
