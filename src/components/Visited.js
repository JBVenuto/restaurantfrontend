import React from "react";


const Visited = (props) => {
        return (
            <div className="card">
                <div className="card-body">
                <span
                        id="cardVisitedText"
                > 
                        {props.name}
                </span>
                <span className="returnChoice">
                    {props.visitAgain ? 
                        "You liked this place" 
                    : 
                        "You didn't like this place"
                    }
                </span>
                </div>
            </div> 
        )
};

export default Visited;