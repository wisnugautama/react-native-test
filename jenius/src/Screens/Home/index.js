import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ImagePath from '../../Config/image';
import Card from '../../Components/Card';

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

    state = { users: null, page: 1 }

    handleGetUsers = () => {
        let { page } = this.state
        const api = `https://reqres.in/api/users?page=${page}`
        const headers = {
            'Content-Type': 'application/json'
        }

        fetch(api, {
            method: 'GET',
            headers
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log('return', responseJSON)
                let page = this.state.page + 1
                this.setState({
                    users: responseJSON.data,
                    page: page
                })
            })
    }

    renderComponent = () => {
        let { users } = this.state
        if (!users) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.handleGetUsers}>
                        <Image
                            source={ImagePath.icon.loading}
                            style={{ width: 100, height: 100 }} />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return users.map((data, id) => {
                return (
                    <View key={id}>
                        <Card
                            name={`${data.first_name} ${data.last_name}`}
                            avatar={data.avatar} />
                    </View>
                )
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {this.renderComponent()}
                {this.state.users && <TouchableOpacity onPress={this.handleGetUsers}>
                            <Image
                                source={ImagePath.icon.loading}
                                style={{ width: 70, height: 70, alignSelf: 'center' }} />
                        </TouchableOpacity>}
            </View>
        )
    }
}

export default Home