import React, { Component } from 'react';
import { View,TextInput, Alert } from 'react-native';
import styles from './style';
import CustomButton from '../../Components/CustomButton';
import { loginPending, loginSucess, loginFailed } from '../../Store/actions/AuthAction';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        pendingLogin: () => {
            dispatch(loginPending(null))
        },
        successLogin: (auth) => {
            dispatch(loginSucess(auth))
        },
        failedLogin: (auth) => {
            dispatch(loginFailed(auth))
        }
    }
}

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

    state = { email: '', password: ''}

    handleLogin = () => {
        this.props.pendingLogin()
        let { email,password } = this.state
        const api = `https://reqres.in/api/login`;
        const headers = {
                'Content-Type': 'application/json'
        }
        const body = {
            email: email,
            password: password 
        }

        fetch(api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                if (responseJSON.token) {
                    this.props.successLogin(responseJSON.token)
                    this.props.navigation.navigate('HomeScreen')
                } else {
                    this.props.failedLogin(responseJSON.error)
                    Alert.alert('Warning', responseJSON.error)
                }
            })
            .catch((err) => {
                console.log('err', err)
            })
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
                        secureTextEntry={true}
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

export default connect(null, mapDispatchToProps)(Login)