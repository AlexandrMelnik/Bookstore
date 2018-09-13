import { GET_ALL_BOOKS } from '../types';

export default function user(state = [], action = []) {
  switch(action.type) {
    case GET_ALL_BOOKS:
      return [
        ...state,
        ...action.books
      ];

    default:
      return state;
  }
}
