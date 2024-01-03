import { ReactNode } from "react";
import { HTML, React, Tailwind, Javascript } from "@/components/partials/svg";

type Stack = {
  svg: ReactNode;
};

type IProjectList = {
  name: string;
  description: string;
  demoURL: string;
  repoURL: string;
  stacks: Stack[];
};

export const ProjectList: IProjectList[] = [
  {
    name: "Hitung AR",
    description: "Web Sederhana buat ngitung AR Genshin Impact",
    stacks: [
      {
        svg: <React className="size-7 animate-rotate fill-react" />,
      },
      {
        svg: <Tailwind className="size-7 fill-tailwind" />,
      },
    ],
    demoURL: "https://rikarani.github.io/hitung-ar/",
    repoURL: "https://github.com/rikarani/hitung-ar",
  },
  {
    name: "Statistika Helper",
    description: "Web buat ngerjain soal statistika sederhana",
    stacks: [
      {
        svg: <HTML className="size-7 fill-html" />,
      },
      {
        svg: <Tailwind className="size-7 fill-tailwind" />,
      },
      {
        svg: <Javascript className="size-7 fill-javascript" />,
      },
    ],
    demoURL: "https://rikarani.github.io/statistika-helper/",
    repoURL: "https://github.com/rikarani/statistika-helper",
  },
];
