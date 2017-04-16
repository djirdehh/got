import * as rp from 'request-promise';
import House from '../models/House';
import HouseFactory from '../factories/HouseFactory';

const rulingHouses = require('../../constants/ruling_houses.json');

class HouseRepository {
    public getRulingHouses(): any {
        const rulingHousesPromises = (rulingHouses.map((house: any) => { 
            return rp('http://anapioficeandfire.com/api/houses?name=' + house.ruling_house)
                .then((response) => {
                    return HouseFactory.mapFromRaw(JSON.parse(response)[0]);
                })
                .catch((err: Error) => {
                    throw err;
                });
        }));

        return Promise.all(rulingHousesPromises)
            .then((response) => {
                return response;
            })
            .catch((err: Error) => {
                throw err;
            });
    }

    public getHouseData(): PromiseLike<House> {
        return rp(`http://anapioficeandfire.com/api/houses/17`)
            .then((response) => {
                return HouseFactory.mapFromRaw(JSON.parse(response));
            })
            .catch((err: Error) => {
                throw err;
            });
    }
}

export default new HouseRepository();