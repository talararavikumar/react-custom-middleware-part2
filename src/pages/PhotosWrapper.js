import React from "react";
const WithLoading = (comp) => {
  class WithLoading extends React.Component {
    render() {
      if (this.props.isLoading) return <div>Loading</div>;
      else return <comp {...this.props} />;
    }
  }

  return WithLoading;
};

export default WithLoading;
