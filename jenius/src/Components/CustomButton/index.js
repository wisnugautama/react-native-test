import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: this.props.color ? this.props.color : '#512DA8' }]} onPress={this.props.onPress}>
                <Text style={styles.fontStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton