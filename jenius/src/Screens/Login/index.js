import React, { Component } from 'react';
import { View,Text, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './style';
import CustomButton from '../../Components/CustomButton';

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

    state = { email: '', password: '', error: false }

    handleLogin = () => {
        console.log('lagu')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                <TextInput
                        placeholder={"Email"}
                        style={styles.textInputStyle}
                        value={this.state.email}
                        onChangeText={(email) => { this.setState({ email: email }) }} />
                    <TextInput
                        placeholder={"Password"}
                        style={styles.textInputStyle}
                        value={this.state.password}
                        onChangeText={(password) => { this.setState({ password: password }) }} />
                    <CustomButton 
                       title="LOGIN"
                       onPress={this.handleLogin} />
            </View>
        )
    }
}

export default Login