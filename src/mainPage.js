import React, { Component, PropTypes } from 'react';
import Input from "./Input";
import './mainPage.css';

class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = { message: "" }
        this.state = { username: this.state.username }
        this.state = { email: this.state.email }
        this.state = { age: this.state.age }
    }

    handleEdit(event, id){ //Fuction
        event.preventDefault();
        let inputName = event.target.name;
        let value = event.target.value;
        this.setState({[inputName]:value});
    }

    handleSubmit(event) {
        if (this.state.username && this.state.username && this.state.username) {
            const element = (
                <div>
                    <p>{this.state.username} </p>
                    <p>{this.state.email}</p>
                    <p>{this.state.age}</p>
                </div>
            );
            this.setState({message: element});
            this.setState({done: true})
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    {!this.state.done
                        ? <form name="contactform" method="POST" action="">

                            <Input required = "true"
                                   placeholder="first name"
                                   label="First name"
                                   type="text"
                                   name = "username"
                                   onChange={(event, id) => this.handleEdit(event, id)}
                                   value = {this.state.username}
                            />
                            <Input
                                placeholder="Email"
                                label="email"
                                type="text"
                                name = "email"
                                onChange={(event, id) => this.handleEdit(event, id)}
                                value = {this.state.email}
                            />
                            <Input
                                type="text"
                                placeholder="20"
                                label="age"
                                name = "age"
                                onChange={(event, id) => this.handleEdit(event, id)}
                                value = {this.state.age}
                            />

                            <input
                                onClick={(e) => {
                                    this.handleSubmit(e)
                                }}
                                type="submit"
                            />


                        </form>

                        :   <div id="result">
                            {this.state.message}
                        </div>
                    }
                </div>

            </>
        )}

}


export default MainPage;