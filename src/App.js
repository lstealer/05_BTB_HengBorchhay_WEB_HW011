import React from 'react';
import './App.css';
import RForm from "./components/RForm";
import 'bootstrap/dist/css/bootstrap.css';
import Heading from "./components/Heading";
import ResultText from "./components/ResultText";
import {Container, Row, Col} from "react-bootstrap"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {arr: []};
    }

    getData(num) {
        this.setState({arr: [...this.state.arr, num]})
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col xs={6} lg={6}>
                            <RForm getResult={this.getData.bind(this)}/>
                        </Col>
                        <Col xs={6} lg={4}>
                            <Heading head={"Result History"}/>
                            <ResultText value={this.state.arr}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
}
export default App;
