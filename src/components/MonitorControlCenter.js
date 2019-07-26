import React from "react";

class MonitorControlCenter extends React.Component {
  render() {
    return (
        <div className="flex w-full border border-black justify-center">
            {this.props.children}
        </div>
    )
  }
}

export default MonitorControlCenter;
