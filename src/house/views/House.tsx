import * as React from 'react';
import House from '../models/House';

class HouseComponent extends React.Component<{houseProps: House}, null> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{console.log(this.props.houseProps)}</h1>
                <img src={require(`../../img/${this.props.houseProps.image}`)}/>
            </div>
        );
    }
}

export default HouseComponent;
