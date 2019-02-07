import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Alert, StyleSheet, TextInput, View} from 'react-native';
import { COLOR, Button, Subheader  } from 'react-native-material-ui';
import SnackBar from 'react-native-snackbar-component';
import Spinner from 'react-native-loading-spinner-overlay';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    subheader: {
        fontSize: 20,
        color: COLOR.blue500
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: COLOR.blue500,
        fontSize: 15,
        marginBottom: 10,
        width: 300
    },
    button: {
        fontSize: 15
    },
    buttonContainer: {
        marginTop: 30
    }
});

export default class Login extends Component {
    static propTypes = {
        alert: PropTypes.shape({
            visible: PropTypes.bool.isRequired,
            message: PropTypes.string.isRequired,
            type: PropTypes.string
        }),
        loading: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired
    };
    state = {
        username: '',
        password: ''
    };

    getBackgroundColorByType = (type) => {
        const colors = {
            'success': COLOR.green500,
            'error': COLOR.red700
        };
        return colors[type] ? colors[type] : null;
    };

    onLogin = () => {
        const { username, password } = this.state;
        if (!username || !password) {
            Alert.alert('Alert', 'plese enter a correct username and password');
            return;
        }
        this.props.login(username, password);
    };

    render() {
        const { alert, loading } = this.props;
        return(
            <View style={styles.container}>
                <Subheader style={{ text: styles.subheader}} text="Log In" />
                <TextInput
                    placeholder='Email address'
                    style={styles.input}
                    onChangeText={(value) => this.setState({ username: value })}
                    value={this.state.username}
                />
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(value) => this.setState({ password: value })}
                    value={this.state.password}
                />
                <Button
                    style={{ container: styles.buttonContainer, text: styles.button }}
                    raised
                    primary
                    onPress={this.onLogin.bind(this)}
                    text="LOG IN"
                />
                <SnackBar
                    autoHidingTime={3000}
                    visible={alert.visible}
                    backgroundColor={this.getBackgroundColorByType(alert.type)}
                    messageColor={COLOR.white}
                    textMessage={alert.message}
                />
                <Spinner
                    visible={loading}
                    textContent={'...'}
                />
            </View>
        )
    }
}