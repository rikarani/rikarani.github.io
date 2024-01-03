import { Fragment } from "react";
import Header from "./Header";
import { Button } from "./ui/button";
import { ProjectList as projects } from "@/config/ProjectList";

export default function Projects(): React.JSX.Element {
  return (
    <>
      <Header section="Projects" tagline="Dan Stuck yang dipake" />

      <div className="space-y-4 divide-y divide-gray-300 py-4 text-gray-300 last:mb-2.5 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 sm:divide-y-0 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <div key={project.name} className="[&:first-child>h6]:mt-0">
              <h6 className="mt-2.5 text-2xl font-semibold sm:mt-0">{project.name}</h6>
              <p className="text-lg font-medium">{project.description}</p>
              <div className="mt-2 flex gap-2.5">
                {project.stacks.map((stack, idx) => {
                  return <Fragment key={idx}>{stack.svg}</Fragment>;
                })}
              </div>
              <div className="mt-3 flex gap-3">
                <a href={project.repoURL} target="_blank">
                  <Button variant="outline">Lihat Repository</Button>
                </a>
                <a href={project.demoURL} target="_blank">
                  <Button variant="outline" className="bg-gray-100 text-gray-900">
                    Lihat Demo
                  </Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
