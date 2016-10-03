import * as actions from '../actions/index';

export enum View {
  HOME,
  BOOK
}

export default function views(state: View, action) {
  switch (action.type) {
    case actions.views.HOME:
      return View.HOME;
    case actions.views.BOOK:
      return View.BOOK;
    default:
      return View.HOME;
  }
}
