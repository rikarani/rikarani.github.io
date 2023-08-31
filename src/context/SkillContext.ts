import { createContext, Dispatch, SetStateAction } from "react";

interface SkillContext {
  skill: string;
  setSkill: Dispatch<SetStateAction<string>>;
}

export const SkillContext = createContext<SkillContext>({
  skill: "",
  setSkill: () => void {},
});
