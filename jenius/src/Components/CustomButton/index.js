import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
                <Text style={styles.fontStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton