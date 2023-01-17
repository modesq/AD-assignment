import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class QuestionForm extends Component {
    render() {
        return (
            <>
            <h1>Ask your questions</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Name" placeholder="enter your name here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="Phone Number" placeholder="enter your phone number here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ask DR. Mofeed!!</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Ask your Question here" />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default QuestionForm;