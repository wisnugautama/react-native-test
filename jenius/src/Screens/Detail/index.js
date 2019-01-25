import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
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
                            title="UPDATE" />
                    </View>
                    <CustomButton
                        title="DELETE"
                        color="#B73F3A" />
                </View>
            </View>
        )
    }
}

export default Detail