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
    image: `${import.meta.env.BASE_URL}projects/p1.webp`,
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
    image: `${import.meta.env.BASE_URL}projects/p2.webp`,
    link: "https://dogstagram-1.netlify.app/",
    size: "small",
    featured: true,
  },
  {
    id: 859096396, // Basa Logistics
    key: "p3",
    tags: ["React", "TypeScript", "TailwindCSS"],
    hasTagBadge: true,
    image: `${import.meta.env.BASE_URL}projects/p3.webp`,
    link: "https://leoreyes07.github.io/basa-logistics/",
    size: "small",
    featured: true,
  },
  {
    id: 1210908481, // bela-and-luna-petshop
    key: "p4",
    tags: ["React", "JavaScript", "E-commerce"],
    image: `${import.meta.env.BASE_URL}projects/p4.webp`,
    link: "https://leoreyes07.github.io/bela-and-luna-petshop/",
    size: "small",
    featured: false,
  },
  {
    id: 829516898, // myFirstRepo
    key: "p5",
    tags: ["HTML5", "CSS3", "Portfolio"],
    image: `${import.meta.env.BASE_URL}projects/p5.webp`,
    link: "https://leoreyes07.github.io/myFirstRepo/",
    size: "small",
    featured: false,
  },
  {
    id: 1026364543, // Todo-Task-App
    key: "p6",
    tags: ["React", "TailwindCSS", "LocalStorage"],
    image: `${import.meta.env.BASE_URL}projects/p6.webp`,
    link: "https://leoreyes07.github.io/Todo-Task-App/",
    size: "small",
    featured: false,
  }
];
