import { links } from "./data";

export type SectionName = (typeof links)[number]["hash"];

export type ProjectInfo = {
  title: string;
  objectives: string[];
  audience: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  link: string;
};

export type Link = {
  nameEng: string;
  nameIta: string;
  hash: string;
};

//text-lanaguages
type Intro = {
  greetings: string;
  job: string;
  based: string;
  city: string;
  specialized: string;
  focus: string;
  contact: string;
};

type About = {
  title: string;
  text: string;
};
export type Resource = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  link: string;
}
export type Texts = {
  intro: Intro;
  about: About;
};
