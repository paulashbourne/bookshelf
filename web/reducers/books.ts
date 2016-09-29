
enum View {
  HOME,
  BOOK
}

export default function views(state: View, action) {
  switch (action.type) {
    case 'HOME':
      return View.HOME;
    case 'BOOK':
      return View.BOOK;
  }
}
