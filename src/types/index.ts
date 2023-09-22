import { ReactNode, MouseEventHandler } from "react";

export type Tab = "Profile" | "Skill" | "Project" | "Website Ini?";

export type ISkillList = {
  stackname: string;
  description: string;
  logo: ReactNode;
  sumberBelajar: {
    nama: string;
    link: string;
  }[];
  isValid: boolean;
};

// Props
export type LogoProps = {
  className?: string;
};

export type MenuButton = {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type SumberBelajarProps = {
  skill: string;
  children: ReactNode;
};

export type LinkProps = {
  to: string;
  children: ReactNode;
  openInNewTab?: boolean;
  className?: string;
};

// Context
