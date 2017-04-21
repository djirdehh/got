import * as React from 'react';
import House from '../models/House';
// import HouseComponent from './House';
import HouseRepository from '../repositories/HouseRepository';

class HouseContainer extends React.Component<{}, null> {

    public state: any;

    constructor() {
        super();
        this.state = {
            houses: [],
            orders: []
        };
    }

    componentDidMount() {
        HouseRepository.getOrders()
            .then((array: House[]) => {
                this.setState({
                    houses: array
                });
            });
    }

    render() {
        return (
            <div>
                {this.state.orders}
            </div>
        );
    }
}

export default HouseContainer;