//autori
export interface IAuthor {
  name: string;
  socials: string | null;
}

//singolo articolo
export interface ISingleCard {
  id: number;
  title: string;
  authors: IAuthor[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [];
  events: [];
}
export interface ISpaceflightResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISingleCard[];
}
