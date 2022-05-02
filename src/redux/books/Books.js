const addBook = 'bookStore/books/addBook';
const removeBook = 'bookStore/books/removeBook';
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return [...state, action.payload];
    case removeBook:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addElement = (payload) => ({
  type: addBook,
  payload,
});

export const removeElement = (id) => ({
  type: removeBook,
  id,
});

export default booksReducer;
