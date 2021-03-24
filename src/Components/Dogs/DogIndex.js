import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: ''
        }
    }

    fetchResults = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {
            this.setState({dog: json});
            console.log(json);
        })
        console.log(this.state.dog);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <button onClick={this.fetchResults}>More Dogs!</button>
                        {/* <p>The State of Dog is: </p>{this.state.dog} */}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <img src={this.state.dog.message} />
                    </Col>
                </Row>
            </div>
        )
    }
}