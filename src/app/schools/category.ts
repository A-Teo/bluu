export interface ICategory {
  title: string;
  slug: string;
  logo: string;
  image: string;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  title: string;
  slug: string;
  logo: string;
  schools: ISchool[];
}

export interface ISchool {
  title: string;
  slug: string;
  logo: string;
  schedule: string;
  price: string;
  place: string;
  description: string;
  photos: string[];
  map: string;
}