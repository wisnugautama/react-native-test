import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import CustomButton from '../../Components/CustomButton';
import styles from './style';

class Detail extends Component {
    static navigationOptions = {
        title: 'View',
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTitleStyle: {
            color: 'white',
            fontWeight: '500'
        }
    }

    state = { name: `${this.props.navigation.state.params.user.first_name} ${this.props.navigation.state.params.user.last_name}`, job: '' }

    handleDelete = () => {
        // the api just response 204
        const api = `https://reqres.in/api/users/${this.props.navigation.state.params.user.id}`
        fetch(api, {
            method: 'DELETE'
        })
            .then((response) => {
                console.log(response)
                this.props.navigation.navigate('HomeScreen')
                Alert.alert('Alert', 'user deleted successfully')
            })
            .catch((err) => {
                Alert.alert('Alert', err)
            })
    }

    handleUpdate = () => {
        let { name, job } = this.state
        const api = `https://reqres.in/api/users/${this.props.navigation.state.params.user.id}`
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = {
            name: name,
            job: job
        }

        fetch(api, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.props.navigation.navigate('HomeScreen')
                Alert.alert('Alert', 'user updated successfully')
            })
            .catch((err) => {
                Alert.alert('Alert', err)
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
                    <View style={{ marginBottom: 20 }}>
                        <CustomButton
                            title="UPDATE"
                            onPress={this.handleUpdate} />
                    </View>
                    <CustomButton
                        title="DELETE"
                        color="#B73F3A"
                        onPress={this.handleDelete} />
                </View>
            </View>
        )
    }
}

export default Detail