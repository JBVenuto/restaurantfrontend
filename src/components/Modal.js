import React from "react";

const Modal = (props) => (
    <div className="modalBackground">
        <div className="modalBody">
            <h3>Would you go back to $restaurant props will go here</h3>
            <form name="returnToRest">
                <label>
                    <input type="radio" value="1" />yes 
                </label>
                <label>
                    <input type="radio" value="0" />no 
                </label>

                <button 
                // key={props.key}
                className="btn btn-secondary"
                id="rate-button"
                type="button"
                // restnum={props.id}
                // visited-status={props.visited}
                // onClick={props.onClick}
            >
                Rate
            </button>
            </form>
        </div>
    </div>
);

export default Modal;