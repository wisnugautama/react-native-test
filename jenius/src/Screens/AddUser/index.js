import React, { Component } from 'react';
import { View, Alert, TextInput } from 'react-native';
import CustomButton from '../../Components/CustomButton';
import styles from './style';

class AddUser extends Component {
    static navigationOptions = {
        title: 'Add',
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTitleStyle: {
            color: 'white',
            fontWeight: '500'
        }
    }

    state = { name: '', job: '' }

    handleAddUser = () => {
        let { name, job } = this.state
        const api = `https://reqres.in/api/users/`;
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = {
            name: name,
            job: job
        }

        fetch(api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                Alert.alert('Alert', 'Successfully add new user')
                this.props.navigation.navigate('HomeScreen')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TextInput
                    placeholder={"Name"}
                    style={styles.textInputStyle}
                    value={this.state.name}
                    onChangeText={(name) => { this.setState({ name: name }) }} />
                <TextInput
                    placeholder={"Job"}
                    style={styles.textInputStyle}
                    value={this.state.job}
                    onChangeText={(job) => { this.setState({ job: job }) }} />
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 50 }}>
                    <CustomButton
                        title="ADD"
                        onPress={this.handleAddUser} />
                </View>
            </View>
        )
    }
}

export default AddUser