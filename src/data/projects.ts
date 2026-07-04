/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: number;
  key: string;
  tags: string[];
  image: string;
  link: string;
  size: "large" | "small";
  featured: boolean;
  iconKey?: "code-xml" | "external-link";
  hasTagBadge?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 879505018, // development_agency_web
    key: "p1",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    hasTagBadge: true,
    image: "https://api.microlink.io/?url=https://leoreyes07.github.io/development_agency_web/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://leoreyes07.github.io/development_agency_web/",
    size: "large",
    featured: true,
  },
  {
    id: 1153096747, // dogstagram
    key: "p2",
    tags: ["Svelte", "Vite", "API"],
    hasTagBadge: true,
    iconKey: "code-xml",
    image: "https://api.microlink.io/?url=https://dogstagram-1.netlify.app/&screenshot=true&meta=false&embed=screenshot.url&force=true",
    link: "https://dogstagram-1.netlify.app/",
    size: "small",
    featured: true,
  },
  {
    id: 859096396, // Basa Logistics
    key: "p3",
    tags: ["React", "TypeScript", "TailwindCSS"],
    hasTagBadge: true,
    image: "https://api.microlink.io/?url=https://leoreyes07.github.io/basa-logistics/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://leoreyes07.github.io/basa-logistics/",
    size: "small",
    featured: true,
  },
  {
    id: 1210908481, // bela-and-luna-petshop
    key: "p4",
    tags: ["React", "JavaScript", "E-commerce"],
    image: "https://api.microlink.io/?url=https://leoreyes07.github.io/bela-and-luna-petshop/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://leoreyes07.github.io/bela-and-luna-petshop/",
    size: "small",
    featured: false,
  },
  {
    id: 829516898, // myFirstRepo
    key: "p5",
    tags: ["HTML5", "CSS3", "Portfolio"],
    image: "https://api.microlink.io/?url=https://leoreyes07.github.io/myFirstRepo/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://leoreyes07.github.io/myFirstRepo/",
    size: "small",
    featured: false,
  },
  {
    id: 1026364543, // Todo-Task-App
    key: "p6",
    tags: ["React", "TailwindCSS", "LocalStorage"],
    image: "https://api.microlink.io/?url=https://leoreyes07.github.io/Todo-Task-App/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://leoreyes07.github.io/Todo-Task-App/",
    size: "small",
    featured: false,
  }
];
