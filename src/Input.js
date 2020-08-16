import React, { Component, PropTypes } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value || "",
        };

        this.state = { done: false }
    }

    handleBlur(event) {
        event.target.style.backgroundColor = '#5AC882'

    }

    render() {
        return (

            <>
                <div className="row">
                    <div className="col-sm-3">
                        <label>{this.props.label}</label>
                    </div>
                    <div className="col-sm-9">
                        <div>
                            {this.props.type === "text" && (
                                <input required={this.props.required}
                                    placeholder={this.props.placeholder && this.props.placeholder}
                                       name = {this.props.name}
                                       onChange={(event)=>this.props.onChange(event)}
                                       onBlur={(event) => this.handleBlur(event)}
                                    type="text"
                                    value={this.state.value}
                                />
                            )}

                                </div>
                    </div>
                </div>
            </>

        )
    }
}


export default Input;