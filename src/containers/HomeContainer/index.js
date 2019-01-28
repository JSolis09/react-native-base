import React, {Component} from 'react';
import Home from '../../components/Home';

export default class HomeContainer extends Component {
    static navigationOptions = {
        header: null,
    };

    goPageOne() {
        const { navigate } = this.props.navigation;
        navigate('PageOne');
    }

    render() {
        return(<Home goPageOne={() => this.goPageOne()} />);
    }
}
