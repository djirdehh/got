import House from '../models/House';
import { IFactory } from '../../interfaces';

class HouseFactory implements IFactory<House> {
	public create(): House {
		return new House();
	}

	public mapFromRaw(rawHouseData: any): House {
		const house = new House();
		house.name = rawHouseData.name;
		house.region = rawHouseData.region;
		house.coatOfArms = rawHouseData.coatOfArms;
		return house;
	}
}

export default new HouseFactory();
