import React from "react";

const NewRestaurant = (props) => (
    <form onSubmit={props.onSubmit}>
        <input 
            type="text" 
            name="newRestaurantName" 
            className="restaurantInput"
            id="restaurantInput"
            value={props.value}
            onChange={props.onChange}
        /><br></br>
        <input 
            type="submit" 
            className="btn btn-secondary"
            id="btn-submit"
            onClick={props.onClick}
            value="Add Restaurant"
        />
            {/* Add Restaurant */}
        {/* </input> */}
    </form>
);

export default NewRestaurant;