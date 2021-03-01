import React from "react";
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{
    // constructor(props) {
    /**Good place to do one-time setup
     BEST PRACTICE - DO NOT DO DATA LOADING EG. API REQUESTS*/
    //     super(props);
    //
    //     //Initializing the state. THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
    //     this.state = { lat: null, errorMessage: '' };
    //
    // }

    state = {lat: null, errorMessage: ''}

    /**Lifecycle methods*/

    //WHEN COMPONENT IS FIRST RENDERED ON THE SCREEN
    /**Good place for data loading*/
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position =>  this.setState({lat:position.coords.latitude}),
            //UPDATING THE STATE. WE CAN ONLY UPDATE STATE USING setState() method.
            (error)=> this.setState({ errorMessage: error.message }))

    }
    /**Good place to do data loading when the state/props change*/
    // //GETS CALLED EVERY SINGLE TIME A COMPONENT IS UPDATED
    // componentDidUpdate(prevProps, prevState, snapshot) {

    // }
    /**Good place to do cleanup (especially for non-React stuff)*/
    //EVERY TIME WE WANT TO REMOVE A COMPONENT FROM THE SCREEN
    // componentWillUnmount() {
    // }
    renderContent(){
        return (
            <div>
                {!this.state.errorMessage&&this.state.lat&&<SeasonDisplay lat = {this.state.lat}/>}
                {this.state.errorMessage&&!this.state.lat&&<h3>Error: {this.state.errorMessage}</h3>}
                {!this.state.lat&&!this.state.errorMessage&&<Spinner  message = "Please allow us to access your location"/>}
            </div>
        )
    }

    //REQUIRED BY REACT
    render() { /**Return only JSX*/
        return this.renderContent()
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)