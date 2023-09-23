import type { ISkillList } from "@/types";
import { HTML, CSS, Javascript, React, NextJS as Next, PHP, Laravel, Tailwind } from "@/components/partials/svg";

export const SkillList: ISkillList[] = [
  {
    stackname: "HTML",
    description: "awal dari segalanya",
    logo: <HTML className="h-14 w-14 fill-html opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "Web Programming UNPAS - HTML Dasar",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F",
      },
      {
        nama: "Web Programming UNPAS - HTML5",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7",
      },
      {
        nama: "W3Schools",
        link: "https://www.w3schools.com/html/",
      },
      {
        nama: "MDN Web Docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
    ],
    isValid: true,
  },
  {
    stackname: "CSS",
    description: "buat ngasih style ke halaman web",
    logo: <CSS className="h-14 w-14 fill-css opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "Web Programming UNPAS - CSS Dasar",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p",
      },
      {
        nama: "Web Programming UNPAS - CSS Layouting",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIUu4Ju9GUL5zpLcuq08TKYr",
      },
      {
        nama: "Web Programming UNPAS - CSS3",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa",
      },
      {
        nama: "W3Schools",
        link: "https://www.w3schools.com/css/",
      },
      {
        nama: "MDN Web Docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    isValid: true,
  },
  {
    stackname: "Javascript",
    description: "Java pakek script, jadilah Javascript",
    logo: <Javascript className="h-14 w-14 fill-javascript opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "Web Programming UNPAS - JS Dasar",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w",
      },
      {
        nama: "Web Programming UNPAS - JS dan DOM",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3",
      },
      {
        nama: "Web Programming UNPAS - JS Lanjutan",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-",
      },
      {
        nama: "W3Schools",
        link: "https://www.w3schools.com/js/",
      },
      {
        nama: "MDN Web Docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/Javascript",
      },
    ],
    isValid: true,
  },
  {
    stackname: "React",
    description: "Library buat bikin UI",
    logo: <React className="h-14 w-14 animate-rotate fill-react opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "Web Programming UNPAS",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1",
      },
      {
        nama: "VIP CODE STUDIO",
        link: "https://www.youtube.com/playlist?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz",
      },
      {
        nama: "React Docs",
        link: "https://react.dev/",
      },
    ],
    isValid: false,
  },
  {
    stackname: "Tailwind",
    description: "Ekor Angin",
    logo: <Tailwind className="h-14 w-14 fill-tailwind opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "Web Programming UNPAS",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
      },
      {
        nama: "Tailwind Docs",
        link: "https://tailwindcss.com/docs/installation",
      },
    ],
    isValid: false,
  },
  {
    stackname: "Next JS",
    description: "Frameworknya React",
    logo: <Next className="h-14 w-14 fill-secondary opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "VIP CODE STUDIO - Pages Router",
        link: "https://www.youtube.com/playlist?list=PLBxX7gb7NsILoc8Dyp_ISkfPr4O_j80LF",
      },
      {
        nama: "VIP CODE STUDIO - App Router",
        link: "https://www.youtube.com/playlist?list=PLBxX7gb7NsIIOJSNEkfKa47wWfvEiZSeo",
      },
      {
        nama: "Next JS Docs",
        link: "https://nextjs.org/docs",
      },
    ],
    isValid: false,
  },
  {
    stackname: "PHP",
    description: "Pemberi Harapan Palsu",
    logo: <PHP className="h-14 w-14 fill-php opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "Web Programming UNPAS - PHP Untuk Pemula",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIUqXfmEIBE3-uzERZPh3vp6",
      },
      {
        nama: "Web Programming UNPAS - OOP pada PHP",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIWvxxll-6wLXrC_16h_Bl_p",
      },
      {
        nama: "Web Programming UNPAS - PHP MVC",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIVEh_d-h5wAjsdv2W4SAtkx",
      },
    ],
    isValid: false,
  },
  {
    stackname: "Laravel",
    description: "Salah satu framework PHP",
    logo: <Laravel className="h-14 w-14 fill-laravel opacity-70 md:h-16 md:w-16" />,
    sumberBelajar: [
      {
        nama: "Web Programming UNPAS - Laravel",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIWiihbBIq-SWPU6b6x21Q_2",
      },
      {
        nama: "Laravel Docs",
        link: "https://laravel.com/docs/10.x",
      },
    ],
    isValid: false,
  },
];
