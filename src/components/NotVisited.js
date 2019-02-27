import React from "react";

const NotVisited = (props) => (
    <div className="card" id="notVisitedCards">
        <div className="card-body">
            <span
                id="cardBodyText"
                key={props.key}
            >
                {props.name}
            </span>
            <button 
                key={props.key}
                className="btn btn-secondary"
                id="visit-button"
                type="button"
                restnum={props.id}
                visited-status={props.visited}
                onClick={props.onClick}
            >
                Visited
            </button>
        </div>
    </div>   
);

export default NotVisited;