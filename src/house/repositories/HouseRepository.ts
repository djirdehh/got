import * as rp from 'request-promise';
import House from '../models/House';
import HouseFactory from '../factories/HouseFactory';

const ruling_houses = require('../../constants/ruling_houses.json');

class HouseRepository {
	public getRulingHouses(): any {
		const ruling_houses_promises = (ruling_houses.map((house: any) => { 
			return rp('http://anapioficeandfire.com/api/houses?name=' + house.ruling_house)
				.then((response) => {
					return HouseFactory.mapFromRaw(JSON.parse(response)[0]);
				})
				.catch((err: any) => {
					throw err;
				});
		}));

		return Promise.all(ruling_houses_promises)
			.then((response) => {
				return response
			})
			.catch((err: any) => {
				throw err;
			})
	}

	public getHouseData(): PromiseLike<House> {
		return rp(`http://anapioficeandfire.com/api/houses/17`)
			.then((response) => {
				return HouseFactory.mapFromRaw(JSON.parse(response));
			})
			.catch((err: any) => {
				throw err;
			});
	}
}

export default new HouseRepository();