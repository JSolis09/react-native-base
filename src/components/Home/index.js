import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, COLOR } from 'react-native-material-ui';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    icons: {
        textAlign: 'center',
        margin: 10,
    },
    icon: {
        marginLeft: 5,
        marginRight: 5,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    otherText: {
      textAlign: 'center',
      color: COLOR.yellow900,
    }
  });

export default class Home extends Component {
    static propTypes = {
        message: PropTypes.string,
        goPageOne: PropTypes.func.isRequired
    };

    goPageOne() {
        const { navigate } = this.props.navigation;
        navigate('PageOne');
    }
    
    render() {
        const { message } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.icons}>
                    <FontAwesome5 style={styles.icon} color="#90ee02" size={50} name={'android'} />
                    <FontAwesome5 style={styles.icon} color="#000000" size={50} name={'apple'} />
                </Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js.</Text>
                <Text style={styles.otherText}>{message}</Text>
                <Button primary text="Go PageOne" onPress={this.goPageOne.bind(this)} />
            </View>
        );
    }
}
