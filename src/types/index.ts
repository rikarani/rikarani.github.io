export type Tab = "Profile" | "Skill" | "Project" | "Website Ini?";

export interface ISkillList {
  stackname: string;
  description: string;
  logo: React.ReactNode;
  sumberBelajar: {
    nama: string;
    link: string;
  }[];
  isValid: boolean;
}

// Props
export interface LogoProps {
  className?: string;
}

export interface MenuButton {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface SumberBelajarProps {
  skill: string;
  children: React.ReactNode;
}

export interface SkillProps {
  stackname: string;
  description: string;
  logo: React.ReactNode;
}

export interface LinkProps {
  to: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
}

// Context
