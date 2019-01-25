import React, { Component } from 'react';
import { View,Text } from 'react-native';

class Login extends Component {
    static navigationOptions = {
        title: 'Log In',
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
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Login Screen</Text>
            </View>
        )
    }
}

export default Login