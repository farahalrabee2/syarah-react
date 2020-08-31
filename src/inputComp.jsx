import React, { Component } from "react";

class InputComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || "",
      type: this.props.type || "text",
    };
  }

  render() {
    return (
      <>
        <div className="inputContainer">
          <input
            placeholder={this.props.placeHolder || ""}
            type={this.state.type}
            value={this.props.value}
            disabled={this.props.disabled}
            onChange={(e) => this.props.changeValue(e.target.value)}
          />
        </div>
      </>
    );
  }
}
export default InputComp;
