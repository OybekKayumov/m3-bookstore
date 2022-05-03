const completed = 'bookStore/books/completed';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case completed:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: completed,
});

export default categoriesReducer;
