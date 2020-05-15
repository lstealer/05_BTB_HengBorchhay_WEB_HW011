import React from "react";
import {Form, Button, Image} from "react-bootstrap";
import image from "../img/math.jpg";


const option = [
    {
        text: "+Plus",
        value: "1"
    },
    {
        text: "-Minus",
        value: "2"
    },
    {
        text: "*Multiply",
        value: "3"
    },
    {
        text: "/Divide",
        value: "4"
    },
    {
        text: "%Module",
        value: "5"
    }]
    let i=1;

//Function
let items = option.map((option) => <option key={option.value} value={option.value}>{option.text}</option>);


class RForm extends React.Component {
    constructor() {
        super();
        this.state =
            {
                value1: true,
                value2: true,
                text1: "",
                text2: "",
                combo: "1",
                warning1: "",
                warning2: "",
                btn:true
            }
        ;
    }

    updateState = (event) => {
        this.setState({combo: event.target.value});
    }
    updateValue1 = (event) => {
        if (event.target.value !== "" && !isNaN(event.target.value)){
            this.setState({value1: false});
            this.setState({text1: event.target.value});
            this.setState({warning1: ""});}
        else{
            this.setState({value1: true});
            this.setState({warning1: "Allow only Number"});}
        let but=this.state;
        if(but.value1===false&&but.value2===false)this.setState({btn:false});
        else this.setState({btn:true});
    }
    updateValue2 = (event) => {
        if (event.target.value !== "" && !isNaN(event.target.value)){
            this.setState({value2: false});
        this.setState({text2: event.target.value});
        this.setState({warning2: ""});}
    else{
        this.setState({value2: true});
        this.setState({warning2: "Allow only Number"});}
        let but=this.state;
        if(but.value1===false&&but.value2===false)this.setState({btn:false});
        else this.setState({btn:true});
    }
    Cal = () => {
        let result = 0;
        let a = parseFloat(this.state.text1);
        let b = parseFloat(this.state.text2);
        let operation = this.state.combo;
        if (operation === "1") {
            result = a + b;
        } else if (operation === "3") {
            result = a * b;
        } else if (a > b) {
            if (operation === "2") {
                result = a - b;
            } else if (operation === "4") {
                result = a / b;
            } else if (operation === "5") {
                result = a % b;
            }
        }
        let resultNum = {
            id: i++,
            myResult: result,
        };
        this.props.getResult(resultNum);
        //alert(this.state.value1+"\n"+this.state.value2+"\n"+b+"\n"+operation+"\n"+result);
    }

    render() {
        return (
            <div>
                <Form>
                    <div>
                        <Image src={image} rounded fluid/>
                    </div>
                    <br/>
                    <Form.Control type="text" id="value1" placeholder="Value1" onChange={this.updateValue1}/>
                    {/*<Form.Text style={{color:"red"}}>*/}
                    {/*    {this.state.warning1}*/}
                    {/*</Form.Text>*/}
                    <br/>
                    <Form.Control type="text" disabled={this.state.value1} placeholder="Value2"
                                  onChange={this.updateValue2}/>
                    {/*<Form.Text style={{color:"red"}}>*/}
                    {/*    {this.state.warning2}*/}
                    {/*</Form.Text>*/}
                    <br/>
                    <Form.Control as="select" disabled={this.state.value2} onChange={this.updateState}>
                        {items}
                    </Form.Control>
                    <br/>
                    <Button variant="primary" type="button" disabled={this.state.value2} onClick={this.Cal}>
                        Calculate
                    </Button>

                </Form>
            </div>
        );
    }
}

export default RForm;