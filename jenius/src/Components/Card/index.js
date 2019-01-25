import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

class Card extends Component {
    render () {
        return (
            <TouchableOpacity style={styles.wrapperStyle}>
                <Image 
                   source={{ uri: this.props.avatar }}
                   style={styles.imageStyle} />
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default Card