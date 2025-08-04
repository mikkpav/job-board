import React from 'react';
import type { CategoryFilterValues } from '../types/types';
import { categories, ALL_CATEGORIES } from '../utils/constants';
import sharedStyles from '../styles/SharedStyles.module.css';
import categoryFilterStyles from './CategoryFilter.module.css';

type CategoryFilterProps = {
  selectedCategoryFilter: CategoryFilterValues;
  categoryFilterHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CategoryFilter({
  selectedCategoryFilter,
  categoryFilterHandler,
}: CategoryFilterProps) {
  return (
    <div className={categoryFilterStyles.container}>
      <label htmlFor="category">Filter</label>
      <select
        id="category"
        onChange={categoryFilterHandler}
        value={selectedCategoryFilter}
        className={sharedStyles.select}
      >
        <option>{ALL_CATEGORIES}</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
