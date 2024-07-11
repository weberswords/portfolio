import { Link, ProjectInfo, Resource } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    nameIta: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    nameIta: "Chi sono",
    hash: "#about",
  },
  {
    nameEng: "Lessons",
    nameIta: "Progetti",
    hash: "#projects",
  },
  {
    nameEng: "Resources",
    nameIta: "Risorse",
    hash: "#resources",
  },
  {
    nameEng: "Contact",
    nameIta: "Contatti",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Getting Started with Miro",
    objectives: [],
    audience: "Adults at an EdTech Company",
    description:
      "During a retrospective, a group of EdTech professionals will be introduced to using Miro, an online whiteboarding tool for the first time.",
    tags: ["Miro", "retro", "edtech", "adult learning"],
    imageUrl: "/miro.png",
    imageAlt: "",
    link: "https://docs.google.com/document/d/1-DaPdQv3gA7mFZ1VibTbxCsJqD1CtXTB6c_ivcRD-eY/edit?usp=sharing",
  },
  {
    title: "Getting Started with AirTable",
    objectives: [],
    audience: "Product Owners at an EdTech Company",
    description:
      "One tool product owners can use to capture customer feedback about their products is AirTable. It provides one place to collect, analyze, and create dashboards for data.",
    tags: ["AirTable", "product development", "customer feedback", "edtech", "adult learning"],
    imageUrl: "/airtable.png",
    imageAlt: "",
    link: "https://docs.google.com/document/d/1LPiuPCMzUA5eBbdRS4ES-tsXRElnw3gZyVpP3J7YHQM/edit?usp=drive_link",
  },
];

export const resourcesData: Resource[]= [
  {
    title: "Exercism",
    description:
      "Lorem ipsum dolor sit amet, ne eos error definitiones. Eu cum nisl legendos. Vix id congue nominati platonem, an pericula consequuntur vim. Brute nemore mediocritatem eum no, mel labitur principes id. Eos tollit ceteros vulputate an.",
    tags: ["coding"],
    imageUrl: "/exercism.png",
    imageAlt: "",
    link: "https://docs.google.com/document/d/1C9tuPdR9rBwCzhO7iLN2yAx9-AhR5TecSkmCUPQkdo0/edit?usp=drive_link",
  },
  {
    title: "AirTable",
    description:
      "Lorem ipsum dolor sit amet, ne eos error definitiones. Eu cum nisl legendos. Vix id congue nominati platonem, an pericula consequuntur vim. Brute nemore mediocritatem eum no, mel labitur principes id. Eos tollit ceteros vulputate an.",
    tags: ["data"],
    imageUrl: "/airtable.png",
    imageAlt: "",
    link: "https://docs.google.com/document/d/1fcQrQdHoGWnc8PqoKvjg7qW97jvGCROP64T8GmwqwSk/edit?usp=sharing",
  },
];

export const skillsData = []
