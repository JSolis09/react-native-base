import React, {Component} from 'react';
import { connect } from "react-redux";

import { loginAction } from './actions';
import Login from '../../components/Login';

class LoginContainer extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (<Login {...this.props} />);
    }
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    alert: state.auth.alert
});
export const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(loginAction(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);