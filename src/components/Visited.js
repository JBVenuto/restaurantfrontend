import React from "react";


const Visited = (props) => (
    <div className="card">
        <div className="card-body">
           <span
                id="cardVisitedText"
           > 
                {props.name}
           </span>
        </div>
    </div> 
);

export default Visited;