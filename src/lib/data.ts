import { Link, ProjectInfo } from "./types";

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
    nameEng: "Projects",
    nameIta: "Progetti",
    hash: "#projects",
  },
  {
    nameEng: "Resources",
    nameIta: "Risorse",
    hash: "#skills",
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

export const skillsData = [
];
