import { useState, useMemo } from "react";
import { SkillList as skills } from "@/config/SkillList";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "./Header";
import TheDialog from "./TheDialog";
import Skill from "./partials/Skill";

export default function Skills(): React.JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<string>("");
  const links = useMemo(() => skills.filter(({ stackname }) => stackname === selectedSkill), [selectedSkill]);
  const fav = skills.filter(({ fav }) => fav);
  const notFav = skills.filter(({ fav }) => !fav);

  return (
    <>
      <Header section="Skills" tagline="Dan Sumber Belajarnya" />

      <div className="text-gray-300">
        <Accordion type="single" defaultValue="fav" collapsible>
          <AccordionItem value="wishlist">
            <AccordionTrigger className="border-b border-gray-300 stroke-gray-300 text-xl font-semibold hover:no-underline">Wishlist Stuck</AccordionTrigger>
            <AccordionContent>
              <Skill.Wrapper>
                {notFav.map(({ logo, stackname, description }) => {
                  const handler = () => {
                    setIsDialogOpen(true);
                    setSelectedSkill(stackname);
                  };

                  return (
                    <Skill.Item key={stackname} logo={logo} onClick={handler}>
                      <h6 className="text-xl font-semibold">{stackname}</h6>
                      <p className="text-base font-medium">{description}</p>
                    </Skill.Item>
                  );
                })}
              </Skill.Wrapper>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="fav">
            <AccordionTrigger className="border-b border-gray-300 stroke-gray-300 text-xl font-semibold hover:no-underline">Stuck Kesayangan</AccordionTrigger>
            <AccordionContent>
              <Skill.Wrapper>
                {fav.map(({ logo, stackname, description }) => {
                  const handler = () => {
                    setIsDialogOpen(true);
                    setSelectedSkill(stackname);
                  };

                  return (
                    <Skill.Item key={stackname} logo={logo} onClick={handler}>
                      <h6 className="text-xl font-semibold">{stackname}</h6>
                      <p className="text-base font-medium">{description}</p>
                    </Skill.Item>
                  );
                })}
              </Skill.Wrapper>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <TheDialog stackname={selectedSkill} isDialogOpen={isDialogOpen} onClick={() => setIsDialogOpen(false)}>
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
        </TheDialog>
      </div>
    </>
  );
}
