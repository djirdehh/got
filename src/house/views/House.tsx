import * as React from 'react';
import House from '../models/House';

class HouseComponent extends React.Component<{houseProps: House}, null> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{console.log(this.props.houseProps.image)}</h1>
                <img src={this.props.houseProps.image}/>
                <img src='../../img/House%20Arryn%20of%20the%20Eyrie_sigil.png'/>
            </div>
        );
    }
}

export default HouseComponent;
