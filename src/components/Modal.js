import React from "react";

const Modal = (props) => (
    <div className="modalBackground">
        <div className=" container modalBody">
            <h3>Would you go back to {props.visitedRestaurant}</h3>
            <form className="modalForm" name="returnToRest" onClick={props.onClick}>
                <label className="radioInput" value="1">
                    <input type="radio" value="1" name="returnChoice" />  Yes 
                </label>
                <label className="radioInput" value="0">
                    <input type="radio" value="0" name="returnChoice" />  No 
                </label>

                {/* <button  */}
                {/* // key={props.key} */}
                {/* className="btn btn-secondary" */}
                {/* id="rate-button" */}
                {/* type="submit" */}
                {/* // restnum={props.id} */}
                {/* // visited-status={props.visited} */}
                {/* // onClick={props.onClick} */}
            {/* > */}
                {/* Rate */}
            {/* </button> */}
            </form>
        </div>
    </div>
);

export default Modal;