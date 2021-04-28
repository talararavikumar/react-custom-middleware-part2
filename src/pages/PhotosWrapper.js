import React from "react";
const WithLoading = (Component) => {
  class WithLoading extends React.Component {
    render() {
      if (this.props.isLoading) return <div>Loading</div>;
      else return <Component {...this.props} />;
    }
  }

  return WithLoading;
};

export default WithLoading;
