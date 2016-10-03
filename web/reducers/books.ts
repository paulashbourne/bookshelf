import * as actions from '../actions/index';

export default function books(state, action) {
  state = state || [];
  switch (action.type) {
    case actions.books.BOOK_SET:
      return action.payload.books;
    default:
      return state;
  }
}
