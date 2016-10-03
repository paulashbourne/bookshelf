enum View {
  HOME,
  BOOK
}

export default function views(state: View, action) {
  switch (action.type) {
    case 'VIEW_HOME':
      return View.HOME;
    case 'VIEW_BOOK':
      return View.BOOK;
    default:
      return View.HOME;
  }
}
