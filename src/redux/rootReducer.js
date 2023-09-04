const initState = {
  books: [
    { title: 'Education', author: 'Ellen White', id: 1 },
    { title: 'The Alchemist', author: 'Paul Coleho', id: 2 },
    { title: 'The seven habits of highly effective people', author: 'Stephen R. Convey', id: 3 },
  ],
};

const rootReducer = (state = initState, action) => state;

export default rootReducer;
