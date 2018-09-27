import { FETCH_BOOKS } from '../types';
import api from '../api';

export const getAllBooks = books => ({
  type: FETCH_BOOKS,
  books
});

export const getBooks = () => dispatch =>
  api.books.getBooks().then(books => {
    dispatch(getAllBooks(books))
});
