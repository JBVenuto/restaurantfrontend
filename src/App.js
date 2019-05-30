// Import React and the main style sheet
import React, { Component } from 'react';
import './App.css';

// Components to be imported
import Container from "./components/Container"
import Title from "./components/Title";
import NotVisited from "./components/NotVisited";
import Visited from "./components/Visited";
import NewRestaurant from "./components/NewRestaurant";
import Modal from "./components/Modal";

class App extends Component {
  // Constructor to give state to the component.
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurantName: '',
      justVisited: 0,
      modalVisible: false
    };

    // Bind the functions that will be used in the app
    this.visitRestaurant = this.visitRestaurant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
    this.restaurantRated = this.restaurantRated.bind(this);
  }

  componentDidMount () {
    this.getRestaurants();
  }

  // Function to get the restaurants and set them to the state
  getRestaurants () {
    console.log('starting get restaurants')
    fetch('http://localhost:8080/api/restaurants')
    // fetch('https://infinite-thicket-79992.herokuapp.com/api/restaurants')
    .then(res => console.log("made the fetch"))
    .then(res => res.json())
    .then(res => this.setState({ restaurants: res.data }))  
    // .then(() => console.log(this.state.restaurants));  
  }

  // Function to update the visited status of a restaurant
  visitRestaurant = event => {
    let restid = parseInt(event.target.getAttribute('restnum'));
    console.log(`justVisited: ${this.state.justVisited}`);
    console.log(event.target);
    console.log(Number.isInteger(event.target.getAttribute('restnum')));
    console.log(Number.isInteger(restid));
    console.log(event.target.className);
    fetch(`http://localhost:8080/api/restaurants/${restid}`);
    // fetch(`https://infinite-thicket-79992.herokuapp.com/api/restaurants/${restid}`);

    // Change visited status
    let changeRestaurants = this.state.restaurants;
    console.log(changeRestaurants);
    let restIndex = changeRestaurants.map(function(x) {return x.id; }).indexOf(restid);
    this.setState ({ justVisited: restIndex });
    console.log(`restaurant index is ${restIndex}`);
    changeRestaurants[restIndex].visited = 1;
    console.log(changeRestaurants);

    this.setState({ restaurants: changeRestaurants });

    // Open modal to rate restaurant
    let modalVisible = !this.state.modalVisible;
    this.setState ({ modalVisible: modalVisible});
  }

  restaurantRated = event =>{
    console.log(event.target.getAttribute('value'));
    let tempValue = parseInt(event.target.getAttribute('value'));
    let visitedId = this.state.restaurants[this.state.justVisited].id;

    if (tempValue === 0) {
      // Change the rating in the state if needed
      let changeRating = this.state.restaurants;
      changeRating[this.state.justVisited].visitAgain = 0;
      this.setState ({ restaurants: changeRating });

      // Change the rating in the database
      fetch(`http://localhost:8080/api/restaurants/rate/${visitedId}`);
      // fetch(`https://infinite-thicket-79992.herokuapp.com/api/restaurants/rate/${visitedId}`);
    }
    // Change the visibility of the modal
    let modalVisible = !this.state.modalVisible;
    this.setState ({ modalVisible: modalVisible});
  }

  rateRestaurant = event => {
    if (this.state.modalVisible) {
      return <Modal 
        visible={this.state.modalVisible}
        onClick={this.restaurantRated}
        visitedRestaurant={this.state.restaurants[this.state.justVisited].name}
        restIndex={this.state.justVisited}
      />;
    }
    else return <div></div>;
  }

  handleChange = event => {
    this.setState({ restaurantName: event.target.value });
  }

  // Function to add a new restaurant to the list of not visited restaurants
  addRestaurant = event => {
    console.log('add button clicked!');
    console.log(`Restaurant Name: ${this.state.restaurantName}`);
    console.log(event);
    let newRestName = this.state.restaurantName;
    event.preventDefault();
    fetch('http://localhost:8080/api/restaurants/create', {
    // fetch('https://infinite-thicket-79992.herokuapp.com/api/restaurants/create', {
      method: 'POST',
      headers: {'Content-type': 'application/x-www-form-urlencoded'},
      body: (newRestName)
    })
    // Update the restaurant list based on the database
    this.getRestaurants();
  }

  render() {
    return (
      <div className="all">
      <Container id="containerId">
        <Title />
        <div className="row">
          <div className="newRestaurantForm">
            <NewRestaurant
              value={this.state.value}
              onSubmit={this.addRestaurant}
              onChange={this.handleChange}
            />
          </div>
        </div>   

        <div className="row">
          <div className="col">
            <h3>Not Visited Restaurants</h3>
             {this.state.restaurants.map( restaurants => { return !restaurants.visited ?
              <NotVisited 
                className="notVisitedCards"
                key={restaurants.key}
                id={restaurants.id}
                name={restaurants.name}
                visited={restaurants.visited}
                visitAgain={restaurants.visitAgain}  
                onClick={this.visitRestaurant}             
              /> : <div />
              }
             )} 
          </div>
          <div className="col">
            <h3>Visited Restaurants</h3>
            {this.state.restaurants.map( restaurants => { return restaurants.visited ?
              <Visited 
                id={restaurants.id}
                key={restaurants.key}
                name={restaurants.name}
                visited={restaurants.visited}
                visitAgain={restaurants.visitAgain}               
              /> : <div />
              }
            )}
          </div>
        </div>    
        <br></br> 
        </Container> 

        <this.rateRestaurant 
          // visible={this.state.modalVisible}
          // onChange={this.restaurantRated}
        />
         
      {/* </Container>  */}
       </div> 
    )
  }
}

export default App;