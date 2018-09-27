import { FETCH_CATEGORIES } from '../types';
import api from '../api';

export const fetchAllCategories = categories => ({
  type: FETCH_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch =>
  api.categories.getCategories().then(categories => {
    dispatch(fetchAllCategories(categories))
});
