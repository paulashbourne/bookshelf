export namespace views {
  export let HOME: string = 'VIEW_HOME';
  export let BOOK: string = 'VIEW_BOOK';

  export function home() {
    return { type: HOME };
  }

  export function book(bookId: string) {
    return {
      type: BOOK,
      payload: {
        bookId: bookId
      }
    };
  }
}
