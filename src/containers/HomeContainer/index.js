import React, {Component} from 'react';
import Home from '../../components/Home';
import { connect } from "react-redux";
import { defaultAction } from './actions'

class HomeContainer extends Component {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.props.changeMessage();
    }

    render() {
        return(<Home {...this.props} />);
    }
}

const mapStateToProps = state => ({
    message: state.home.message
});
const mapDispatchToProps = dispatch => ({
    changeMessage: () => dispatch(defaultAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);