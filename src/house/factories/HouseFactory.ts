import House from '../models/House';
import { IFactory } from '../../interfaces';

class HouseFactory implements IFactory<House> {
    public create(): House {
        return new House();
    }

    public mapFromRaw(rawHouseData: any): House {
        const house = new House();
        house.id = (rawHouseData.url).match(/\d+$/)[0]; // Obtain id number from url string
        house.name = rawHouseData.name;
        house.region = rawHouseData.region;
        house.words = rawHouseData.words;
        house.titles = rawHouseData.titles;
        house.currentLord = rawHouseData.currentLord;
        house.heir = rawHouseData.heir;
        house.swornMembers = rawHouseData.swornMembers;
        house.image = rawHouseData.name + '_sigil.png';
        return house;
    }
}

export default new HouseFactory();
