import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import * as branches from "./branches"

class BranchCard extends Component {
    render() {
        return (
            <div style={{ width: "90%", margin: "auto", paddingTop:"30px", paddingBottom:"30px"}}>
                <Row xs={1} md={3} className="g-4">
                    {this.props.branchesArray.map((branch) => {
                        return (
                            <Col>
                                <Card className="c" style={{ width: "90%", height: "300px" }}>
                                    <Card.Img variant="top" src={branch.image} alt="" />
                                    <Card.Body>
                                        <Card.Title style={{ color: "black" }}>
                                            {branch.name.replace(/([A-Z])/g, ' $1').trim()}
                                        </Card.Title>
                                        <Button
                                            // onClick={() => this.showModalFunction(item.headline)}
                                            // href={"ad-frontend/src/components/branches/" + branch.name + ".js"}
                                            href={branch.name}
                                            variant="primary"
                                            type="submit"
                                        >
                                            Show branch products...
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        )
    }
}

export default BranchCard;