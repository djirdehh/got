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

    public getOrders(): any {
        const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        const promise1 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[0]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise2 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[1]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise3 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[2]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise4 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[3]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise5 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[4]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise6 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[5]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise7 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[6]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise8 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[7]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise9 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[8]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise10 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[9]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        const promise11 = rp(`https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=${pages[10]}`)
            .then((response) => {
                return JSON.parse(response).orders;
            })
            .catch((err: Error) => {
                throw err;
            });

        return Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise9, promise10, promise11])
            .then((response) => {
                function flatten(arr: any) {
                  return arr.reduce(function (flat: any, toFlatten: any) {
                    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
                  }, []);
                }

                return flatten(response);
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