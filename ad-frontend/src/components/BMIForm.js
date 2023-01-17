import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "/home/mahmoud/ad-BTEC-assignment/ad-frontend/src/styles/BMIForm.css";



class BMIForm extends Component {
    constructor(props) {
        super(props);
        this.state = { weight: 90, height: 180, bmi: 27, optimalweight: '' };
        this.submitMe = this.submitMe.bind(this);
        this.heightchange = this.heightchange.bind(this);
        this.weightchange = this.weightchange.bind(this);
        this.change = this.change.bind(this);
        this.blur = this.blur.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    heightchange(e) {
        this.setState({ height: e.target.value });
        e.preventDefault();
    }

    blur(e) {
        this.calculateBMI();
    }
    weightchange(e) {
        this.setState({ weight: e.target.value });
        e.preventDefault();
    }

    calculateBMI() {
        var heightSquared = (this.state.height / 100 * this.state.height / 100);
        var bmi = this.state.weight / heightSquared;
        var low = Math.round(18.5 * heightSquared);
        var high = Math.round(24.99 * heightSquared);
        var message = ""

        if (bmi < 18.5) {
            message = "You are under weight";
        } else if (bmi >= 18.5 && bmi <= 24.99) {
            message = "You are in a healthy weight range";
        } else if (bmi >= 25 && bmi <= 29.9) {
            message = "You are in the overweight range";
        } else if (bmi >= 30) {
            message = "You are in the obese range";
        }

        this.setState({ message: message });
        this.setState({ optimalweight: "Your suggested weight range is between " + low + " - " + high + " KG" });
        this.setState({ bmi: Math.round(bmi * 100) / 100 });

    }

    submitMe(e) {
        e.preventDefault();
        this.calculateBMI();
    }

    change(e) {
        // e.preventDefault();
        console.log(e.target);
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <>
                <h1>BMI calculator</h1>
                <Form onSubmit={this.submitMe}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your height in cm:</Form.Label>
                        <Form.Control width={12} type="Name" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your weight in kg:</Form.Label>
                        <Form.Control type="Phone Number" name="weight" value={this.state.weight} onChange={this.weightchange} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                    <br />
                    <label>{this.state.checked}Your BMI is {this.state.bmi} </label>
                    <label>{this.state.message}</label>
                    <label>{this.state.optimalweight}</label>
                </Form>
            </>
        );
    }
}

export default BMIForm;