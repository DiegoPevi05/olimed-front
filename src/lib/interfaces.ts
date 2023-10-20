export interface FilterProductProps {
  categories:string[];
  subcategories:string[];
  labels:string[];

}
export interface ProductProps {
  id:number;
  category:string;
  subcategory:string;
  labels:string[];
  name:string;
  characteristic:string[];
  short_description:string;
  description:string;
  table:TableProductProps[];
  images:string[];
}

interface TableProductProps {
  name:string;
  brand:string;
  specifications:string;
}

export interface newProps  {
  id:number;
  header:string;
  subHeader:string;
  preview:string;
  body:string;
  imagen:any;
  href:string;
  external_news:string;
  hashtags:string[];
  created_date: string;
}
