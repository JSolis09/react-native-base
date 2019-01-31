import React, {Component} from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import { COLOR, Button, Subheader  } from 'react-native-material-ui';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    subheader: {
        fontSize: 40,
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
        marginTop: 10,
        fontSize: 15
    }
});

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Home');
    }

    render() {
        return(
            <View style={styles.container}>
                <Subheader style={styles.subheader} text="Log In" />
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
                    style={styles.button}
                    raised
                    primary
                    onPress={this.onPress.bind(this)}
                    text="LOG IN"
                />
            </View>
        )
    }
}