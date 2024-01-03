import { useState, useMemo } from "react";
import { SkillList as skills } from "@/config/SkillList";

import Header from "./Header";
import Dialog from "./Dialog";
import Skill from "./partials/Skill";

export default function Skills(): React.JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<string>("");
  const links = useMemo(() => skills.filter(({ stackname }) => stackname === selectedSkill), [selectedSkill]);

  return (
    <>
      <Header section="Skills" tagline="Dan Sumber Belajarnya" />

      <div className="text-gray-300">
        <Skill.Wrapper>
          {skills.map(({ logo, stackname, description }) => {
            function handler() {
              setIsDialogOpen(true);
              setSelectedSkill(stackname);
            }

            return (
              <Skill.Item key={stackname} logo={logo} onClick={handler}>
                <h6 className="text-xl font-semibold">{stackname}</h6>
                <p className="text-base font-medium">{description}</p>
              </Skill.Item>
            );
          })}
        </Skill.Wrapper>

        <Dialog stackname={selectedSkill} isDialogOpen={isDialogOpen} onClick={() => setIsDialogOpen(false)}>
          <ul className="list-inside list-['-_'] space-y-1.5">
            {links[0]?.sumberBelajar.map(({ nama, link }) => {
              return (
                <li key={link}>
                  <a href={link} className="font-medium text-gray-300" target="_blank">
                    {nama}
                  </a>
                </li>
              );
            })}
          </ul>
        </Dialog>
      </div>
    </>
  );
}
