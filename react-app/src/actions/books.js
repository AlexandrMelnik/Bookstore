import { GET_ALL_BOOKS } from '../types';
import api from '../api';

export const getAllBooks = books => ({
  type: GET_ALL_BOOKS,
  books
});

export const getBooks = () => dispatch =>
  api.books.getBooks().then(books => {
    dispatch(getAllBooks(books))
});
