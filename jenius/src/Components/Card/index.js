import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { withNavigation } from 'react-navigation';

class Card extends Component {
    render () {
        return (
            <TouchableOpacity style={styles.wrapperStyle} onPress={() => this.props.navigation.navigate('DetailsScreen', { user: this.props.data })}>
                <Image 
                   source={{ uri: this.props.data.avatar }}
                   style={styles.imageStyle} />
                <Text>{this.props.data.first_name} {this.props.data.last_name}</Text>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(Card)