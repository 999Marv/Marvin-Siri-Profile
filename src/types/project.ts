export type Project = {
  title: string;
  description: string[];
  links: {
    url: string;
    text: string;
  }[];
  demo?: string;
  images?: string[];
};
