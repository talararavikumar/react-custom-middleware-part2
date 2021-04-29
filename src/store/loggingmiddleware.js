const loggingmiddleware = (state) => (next) => (action) => {
  console.log("action " + action);
  console.log("previous state " + state);
  next(action);
  console.log("new state" + state);

  switch (action.type) {
    case "PHOTOS_LOADING":
      next(action);
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((photos) =>
          state.dispatch({ type: "PHOTOS_LOADED", payload: photos })
        );
      break;
    default:
      next(action);
  }
  //setTimeout(()=>{state.dispatch({ type: "PHOTOS_LOADED", payload: [] })}, 3000)
};

export default loggingmiddleware;
