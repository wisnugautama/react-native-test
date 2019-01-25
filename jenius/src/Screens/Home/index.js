import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
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

    state = { users: [], page: 1 }

    handleGetUsers = () => {
        let { page, users } = this.state
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
                let page = this.state.page + 1;
                for (let i = 0; i < responseJSON.data.length; i++) {
                    this.state.users.push(responseJSON.data[i])
                }

                this.setState({
                    users: users,
                    page: page
                })
            })
    }

    renderComponent = () => {
        let { users } = this.state
        if (users.length == 0) {
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
                            data={data} />
                    </View>
                )
            })
        }
    }

    render() {
        console.log('this ste', this.state.users)
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                {this.renderComponent()}
                {this.state.users.length !== 0 && this.state.page !== 5
                    &&
                    <View>
                        <TouchableOpacity onPress={this.handleGetUsers}>
                            <Image
                                source={ImagePath.icon.loading}
                                style={{ width: 50, height: 50, alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                }
            </ScrollView>
        )
    }
}

export default Home