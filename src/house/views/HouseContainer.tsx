import * as React from 'react';
import House from '../models/House';
import HouseComponent from './House';
import HouseRepository from '../repositories/HouseRepository';
// const HouseStarkSigil = require('../../img/house_arryn_sigil.png');

class HouseContainer extends React.Component<{}, null> {

    public state: any;

    constructor() {
        super();
        this.state = {
            houses: []
        };
    }

    componentDidMount() {
        HouseRepository.getRulingHouses()
            .then((array: House[]) => {
                this.setState({
                    houses: array
                });
            });
    }

    render() {
        return (
            <div>
                {this.state.houses.map((house: House) => {
                    return <HouseComponent key={house.id} houseProps={house}/>
                })}
            </div>
        );
    }
}

export default HouseContainer;