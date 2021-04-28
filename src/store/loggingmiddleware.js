const loggingmiddleware = (state) => (next) => (action) => {
  console.log("action " + action);
  console.log("previous state " + state);
  next();
  console.log("new state" + state);
};

export default loggingmiddleware;
