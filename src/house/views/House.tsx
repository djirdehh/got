import * as React from 'react';
import House from '../models/House'
import HouseRepository from '../repositories/HouseRepository'
const house_stark_sigil = require('../../img/house_arryn_sigil.png')

class App extends React.Component<{}, null> {

	public state: any;

	constructor() {
		super();

		this.state = {
			houses: [],
			houseName: 'holaa'
		}
	}

	componentDidMount() {
		HouseRepository.getRulingHouses()
			.then((array: House[]) => {
				return array;
			});
		// this.setState({
		// 	houses: array
		// });
		// HouseRepository.getHouseData()
		// 	.then((house: House) => {
		// 		this.setState({
		// 			houseName: 'spicy'
		// 		});
		// 	})
	}

	render() {
		return (
			<div>
				<h1>{this.state.houseName}</h1>
				<img src={house_stark_sigil} alt='House Stark Sigil'/>
			</div>
		);
	}
}

export default App;
