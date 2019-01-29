import React, {Component} from 'react';
import Home from '../../components/Home';
import { connect } from "react-redux";
import { defaultAction } from './actions'

class HomeContainer extends Component {
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    test: (data) => dispatch(defaultAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);