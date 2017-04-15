import * as rp from 'request-promise';
import House from '../models/House';
import HouseFactory from '../factories/HouseFactory';

class HouseRepository {
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