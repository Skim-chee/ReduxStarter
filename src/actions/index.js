export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action,
  // and an object with a type property
  return {
    // Always included
    type: 'BOOK_SELECTED',
    // Optional data
    payload: book
  };
}