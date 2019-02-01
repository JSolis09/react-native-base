import React, {Component} from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { StyleSheet, TextInput, View} from 'react-native';
import { COLOR, Button, Subheader  } from 'react-native-material-ui';
import SnackBar from 'react-native-snackbar-component';
import firebase from '../../firebase';

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
    state = {
        username: '',
        password: '',
        alert: {
            visible: false,
            message: ''
        }
    };

    onLogin = () => {
        const { username, password } = this.state;
        if (!username || !password) {
            alert('plese enter a correct username and password');
            return;
        }
        firebase.auth()
            .signInWithEmailAndPassword(username, password)
            .then((response) => {
                this.setState({
                    alert: {
                        visible: true,
                        message: 'Login Succesfull!!'
                    }
                });
                setTimeout(() => this.onCloseAlert(), 2000);
            });
    }

    goHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        this.props.navigation.dispatch(resetAction);
    };

    onCloseAlert = () => {
        const { push } = this.props.navigation;
        this.setState({
            alert: { message: '', visible: false }
        });
       this.goHome();
    };

    render() {
        const { alert } = this.state;
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
                    visible={alert.visible}
                    backgroundColor={COLOR.green500}
                    messageColor={COLOR.white}
                    textMessage={alert.message}
                />
            </View>
        )
    }
}