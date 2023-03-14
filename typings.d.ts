import { SanityClient } from "next-sanity";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInfo: string;
  email: string;
  role: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  name: string;
}

export interface Project extends SanityBody {
  title: string
  _type: 'project'
  image: Image
  summary: string
  // this may have to be Skill[]
  technologies: Technology[]
}

export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  companyImg: Image
  startDate: string
  role: string
  endDate: string
  isCurrenlyWorkingHere: boolean
  // or role
  jobTitle: string
  summaryPoints: string[]
  technologies: Skill[]
}

export interface Social extends SanityBody {
  _type: "social";
  name: string;
  url: string;
}
