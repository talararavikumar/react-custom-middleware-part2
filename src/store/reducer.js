const initialState = {
  photos: [],
  isLoading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PHOTOS_LOADING":
      return { ...state, isLoading: true };
    case "PHOTOS_LOADED":
      return { ...state, photos: action.payload, isLoading: false };
    default:
      return state;
  }
}

export default reducer;
