import { FETCH_CATEGORIES } from '../types';

export default function user(state = [], action = []) {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return [
        ...action.categories
      ];

    default:
      return state;
  }
}
