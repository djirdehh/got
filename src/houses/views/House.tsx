import * as React from 'react';
import House from '../models/House'
import HouseRepository from '../repositories/HouseRepository'

class App extends React.Component<{}, null> {

	public state: any;

	constructor() {
		super();

		this.state = {
			houseName: 'holaa'
		}
	}

	componentDidMount() {
		HouseRepository.getHouseData()
			.then((house: House) => {
				this.setState({
					houseName: house.name
				});
			})
	}

	render() {
		return (
			<div>
				<h1>{this.state.houseName}</h1>
			</div>
		);
	}
}

export default App;
