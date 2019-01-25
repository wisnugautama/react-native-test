import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'User List',
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTitleStyle: {
            color: 'white',
            fontWeight: '500'
        }
    }

    render() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default Home