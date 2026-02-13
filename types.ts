export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface ServiceDetail {
  title?: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: ServiceDetail[];
}
