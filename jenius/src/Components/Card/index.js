import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';

class Card extends Component {
    render () {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 0.6, borderColor: '#ddd', marginBottom: 10, alignItems: 'center', height: 60 }}>
                <Image 
                   source={{ uri: this.props.avatar }}
                   style={{ width: 40, height: 40, borderRadius: 20, marginHorizontal: 15 }} />
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default Card