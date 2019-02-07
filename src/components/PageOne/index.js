import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { COLOR } from 'react-native-material-ui';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.grey100,
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default class PageOne extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.content}>
                    Page One
                </Text>
            </View>
        )
    }
}