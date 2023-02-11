interface sanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends sanityBody {
  _type: 'pageInfo';
  adress: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface ContactType extends sanityBody {
  _type: 'contact';
  header1: 'string';
  nameHeading: 'string';
  emailHeading: 'string';
  projectHeading: 'string';
  button: 'string';
  header2: 'string';
  mail: 'string';
  mailValue: 'email';
  linkedin: 'string';
  linkedinValue: 'string';
}

export interface Technology extends sanityBody {
  _type: 'skill';
  image: Image;
  progression: string;
  title: string;
}

export interface Skill extends sanityBody {
  _type: 'skill';
  image: Image;
  progress: string;
  title: string;
}

export interface Project extends sanityBody {
  title: string;
  _type: 'project';
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends sanityBody {
  _type: 'social';
  title: string;
  url: string;
}
