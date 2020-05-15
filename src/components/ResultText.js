import React from "react";
import { ListGroup} from "react-bootstrap";
export default function Result(props) {
    var result = props.value;
    const all = result.map((result) => (
        <ListGroup.Item key={result.id}>{result.myResult}</ListGroup.Item>
    ));
    return (
        <div class="lg">
            <ListGroup class="lg">
                {all}
            </ListGroup>
        </div>
    );
}
