import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import ImagePath from '../../Config/image';

class RefreshButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
                <Image
                    source={ImagePath.icon.loading}
                    style={this.props.imageStyle} />
            </TouchableOpacity>
        )
    }
}

export default RefreshButton