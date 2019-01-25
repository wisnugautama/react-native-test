import { StyleSheet,Dimensions,Platform } from 'react-native';
let { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    textInputStyle: { 
        paddingVertical: 10, 
        borderBottomWidth: 0.6, 
        borderColor: '#ddd', 
        marginHorizontal: 20,
        marginBottom: 20 
    }
})