import IAuthor from "./author";
import ICategorie from "./categorie";
import IFeaturedMedia from "./featuredMedia";

export default interface IPost {
  id: number;
  slug: string;
  link: string;
  permalink: string;
  title: string;
  headline: string;
  excerpt: string;
  featured_media: IFeaturedMedia;
  categories: ICategorie[];
  sponsor: any;
  content?: string;
  bibliography?: string;
  metas?: any;
  previous_posts?: IPost[];
  next_posts?: IPost[];
  author: IAuthor;
  published: Date;
  modified: Date;
}
