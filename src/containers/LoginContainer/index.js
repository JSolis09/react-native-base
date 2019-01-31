import React, {Component} from 'react';
import Login from '../../components/Login';

class LoginContainer extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (<Login {...this.props} />);
    }
}

export default LoginContainer;