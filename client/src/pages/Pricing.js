import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Price from "../components/Pricing"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Pricing extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Price />
                </Row>
            </Container>
        )
    }
}

export default Pricing;