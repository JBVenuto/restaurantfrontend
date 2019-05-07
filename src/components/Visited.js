import React from "react";


const Visited = (props) => {
    if (props.visitAgain) {
        return (
            <div className="card">
                <div className="card-body">
                <span
                        id="cardVisitedText"
                > 
                        {props.name}
                </span>
                <span className="returnChoice">You liked this place</span>
                </div>
            </div> 
        )
    }
    else {
        return (
            <div className="card">
                <div className="card-body">
                <span
                        id="cardVisitedText"
                > 
                        {props.name}
                </span>
                <span className="returnChoice">You didn't liked this place</span>
                </div>
            </div>
        )
    }
};

export default Visited;