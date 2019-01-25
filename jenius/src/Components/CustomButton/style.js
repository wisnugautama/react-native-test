import { StyleSheet,Dimensions,Platform } from 'react-native';
let { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    buttonStyle: {
        width: width/2,
        backgroundColor: '#512DA8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        borderRadius: 2,
        alignSelf: 'center',
        height: 40,
        elevation: 5
    },
    fontStyle: { color: 'white', fontWeight: '500' }
})