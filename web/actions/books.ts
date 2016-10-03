export namespace books {
  export let BOOK_SET: string = 'BOOK_SET';
  export let BOOK_LOAD: string = 'BOOK_LOAD';

  export function setBooks(books) {
    return {
      type: BOOK_SET,
      payload: {
        books
      }
    };
  }

  export function load() {
    return {
      type: BOOK_LOAD,
    };
  }
}
