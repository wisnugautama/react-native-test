import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import ImagePath from '../../Config/image';
import Card from '../../Components/Card';
import { connect } from 'react-redux';
import { getUserPending, getUserSuccess, getUserFailed } from '../../Store/actions/UserAction';

const mapDispatchToProps = (dispatch) => {
    return {
        pendingGetUser: () => {
            dispatch(getUserPending(null))
        },
        successGetUser: (user) => {
            dispatch(getUserSuccess(user))
        },
        failedGetUser: (error) => {
            dispatch(getUserFailed(error))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.user
    }
}

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
        this.props.pendingGetUser()
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
                this.props.successGetUser(users)
                this.setState({
                    users: users,
                    page: page
                })
            })
            .catch((err) => {
                this.props.failedGetUser(err)
                console.log('err message', err)
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
        console.log('ini users', this.props.user)
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                {this.renderComponent()}
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    {this.state.users.length !== 0 && this.state.page !== 5
                        &&
                        <TouchableOpacity onPress={this.handleGetUsers} style={{ flex: 2, alignItems: 'center', marginRight: 40, marginTop: 20 }}>
                            <Image
                                source={ImagePath.icon.loading}
                                style={{ width: 50, height: 50, alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddUserScreen')} style={{ flex: 1, marginRight: 20 }}>
                        <Image
                            source={ImagePath.icon.add}
                            style={{ width: 70, height: 70, alignSelf: 'flex-end' }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)