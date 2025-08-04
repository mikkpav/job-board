import * as constants from '../utils/constants';

export type Category = (typeof constants.categories)[number];
export type CategoryFilterValues = Category | typeof constants.ALL_CATEGORIES;
export type Job = {
  id: string;
  title: string;
  company: string;
  category: Category;
  description: string;
  location: string;
  favorite: boolean;
};
