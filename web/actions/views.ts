export namespace views {
  let HOME: string = 'VIEW_HOME';
  let BOOK: string = 'VIEW_BOOK';

  export function home() {
    return { type: HOME };
  }

  export function book(bookId: string) {
    return {
      type: BOOK,
      bookId: bookId
    };
  }
}
