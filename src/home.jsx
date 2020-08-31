import React, {Component} from "react";
import InputComp from "./inputComp";
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myArr: [{
                value: "",
                disabled: true,
            }],
            totalItems: ''
        };
    }

    addClick() {
        var rand = Math.floor(Math.random() * 10) + 1;
        this.setState({totalItems: rand});
        for (let i = 1; i < rand; i++) {
            this.state.myArr[i] = {
                value: "",
                disabled: true,
            };
        }
    }

    setDataNewValue = (index, newValue) => {
        const tempArr = this.state.myArr.slice(); //copy the array
        tempArr[index].value = newValue; //execute the manipulations

        if (index != this.state.totalItems - 1) {
            this.changeDisable(index + 1);

        }
        if (index > 0 && !newValue.includes(this.state.myArr[index - 1].value)) {
            tempArr[index].value = tempArr[index - 1].value + newValue;
        } else {
            tempArr[index].value = newValue;

        }
        this.setState({myArr: tempArr}); //set the new state
    };

    changeDisable = (index) => {
        const tempArr = this.state.myArr.slice(); //copy the array
        tempArr[index].disabled = false; //execute the manipulations
        this.setState({myArr: tempArr});
    };

    render() {
        return (
            <>
                <button onClick={this.addClick.bind(this)}>Add Input</button>
                {this.state.totalItems > 1 ? (
                    <div>
                        {this.state.myArr.map((item, i) => (
                            <>
                                <InputComp
                                    key={i}
                                    type="input"
                                    value={item.value}
                                    disabled={i > 0 ? item.disabled : false}
                                    changeValue={(val) => {
                                        this.setDataNewValue(i, val);
                                    }}
                                />
                            </>
                        ))}
                    </div>
                ) : ""}
            </>
        );
    }
}

export default Home;
