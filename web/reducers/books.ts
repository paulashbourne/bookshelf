

export default function books(state: string, action) {
  switch (action.type) {
    case 'VIEW_HOME':
      return null;
    case 'VIEW_BOOK':
      return action.payload.bookId;
    default:
      return null;
  }
}
