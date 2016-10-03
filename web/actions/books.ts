export namespace books {
  export let BOOK_SET: string = 'BOOK_SET';

  export function setBooks(books) {
    return {
      type: BOOK_SET,
      payload: {
        books
      }
    };
  }
}
