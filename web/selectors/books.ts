import { createSelector } from 'reselect'

import { View } from '../reducers/views';

const _getView = (state, props) => state.views;
const _getBooks = (state, props) => state.books;

export const getBooks = createSelector(
  [_getView, _getBooks],
  (view, books) => {
    switch (view) {
      case View.HOME:
        console.log('Selector');
        return books
      case View.BOOK:
        return books[0];
    }
  }
)
