import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Home from '../../components/Home';
import { defaultAction } from './actions'

class HomeContainer extends Component {
    static propTypes = {
        changeMessage: PropTypes.func.isRequired
    };
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