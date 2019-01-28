import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-material-ui';
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
  });

export default class Home extends Component {
    static propTypes = {
        goPageOne: PropTypes.func.isRequired
    };
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.icons}>
                    <FontAwesome5 style={styles.icon} color="#90ee02" size={50} name={'android'} />
                    <FontAwesome5 style={styles.icon} color="#000000" size={50} name={'apple'} />
                </Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Button primary text="Go PageOne" onPress={this.props.goPageOne} />
            </View>
        );
    }
}
