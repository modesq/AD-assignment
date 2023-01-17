import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class ProductCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://medlineplus.gov/images/Medicines_share.jpg" />
                <Card.Body>
                    <Card.Title>Medicine name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;