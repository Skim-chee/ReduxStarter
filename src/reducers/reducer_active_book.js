// State arg is not application state, only current reducers state
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  
  return state;
}