import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position), //Success callback
// 		(err) => console.log(err)//Failure callback
// 		);

// 	return <div>Latitude: </div>;
// };

// Pulls in other functionality from Component class
class App extends React.Component {
	// Great place to initialize state because this is called each time an 
	// instance of App is created
	constructor(props) { // Constructor function required by JS and NOT React
		super(props); //Don't forget to include this!

		// THIS IS THE ONLY TIME we do direct assignment to this.state
		this.state = { lat: null, errorMessage: '' }; 
		// Set a default value for latitude because we will eventually have value
	}

	// Abbreviated syntax for constructor and state intialization
	// state = { lat: null, errorMessage: '' };

	componentDidMount () {
		// Include this function here instead of the render function
		// because render() is called SO MANY TIMES and we don't
		// want to refetch the current location, also for data-loading
		window.navigator.geolocation.getCurrentPosition(
			// Notice we did not use direct assignment like this.state.late = position.coords.latitude
			(position) => this.setState({ lat: position.coords.latitude }), // Success callback
			(err) => this.setState({ errorMessage: err.message }) //Failure callback
		);

	}

	// React says we have to define render function! REQUIRED
	render() {
			// If latitude was determined
			if (this.state.lat && !this.state.errorMessage) {
				return <div>Latitude: { this.state.lat }</div>;
			}

			/// If there was an error
			if (!this.state.lat && this.state.errorMessage) {
				return <div>Error: { this.state.errorMessage }</div>;
			}

			/// If no latitude or error yet
			return <div>Loading...</div>;
	};
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
