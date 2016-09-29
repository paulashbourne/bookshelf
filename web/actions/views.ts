export namespace views {
  let HOME: string = 'HOME';
  let BOOK: string = 'BOOK';

  export function home() {
    return { type: HOME };
  }

  export function book() {
    return { type: BOOK };
  }
}
