const loggingmiddleware = (state) => (next) => (action) => {
  console.log("action " + action);
  console.log("previous state " + state);
  next(action);
  console.log("new state" + state);
  //setTimeout(()=>{state.dispatch({ type: "PHOTOS_LOADED", payload: [] })}, 3000)
};

export default loggingmiddleware;
