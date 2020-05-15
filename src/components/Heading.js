import React from "react";
function Heading(props) {
    return(
        <div>
            <h2 style={{height:props.height ,width:props.width,color:props.color}}>{props.head}</h2>
        </div>
    );
}
export default Heading;