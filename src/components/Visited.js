import React from "react";


const Visited = (props) => (
    <div className="card">
        <div className="card-body">
           <span
                id="cardVisitedText"
           > 
                {props.name}
           </span>
           <span className="returnChoice">Would you return? {props.visitAgain}</span>
        </div>
    </div> 
);

export default Visited;