const initialState = {
  photos: [],
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PHOTOS_LOADING":
      return { ...state, loading: true };
    case "PHOTOS_LOADED":
      return { ...state, photos: action.payload };
    default:
      return state;
  }
}

export default reducer;
