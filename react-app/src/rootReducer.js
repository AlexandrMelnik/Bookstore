import { combineReducers } from 'redux';
import user from './reducers/user';
import books from './reducers/books';
import categories from './reducers/categories';

export default combineReducers({
  user,
  books,
  categories
})
