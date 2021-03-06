import { FETCH_BOOKS } from '../types';

export default function user(state = [], action = []) {
  switch(action.type) {
    case FETCH_BOOKS:
      return [
        ...action.books
      ];

    default:
      return state;
  }
}
