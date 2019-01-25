import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    wrapperStyle: { 
        flexDirection: 'row', 
        borderWidth: 0.6, 
        borderColor: '#ddd', 
        marginBottom: 10, 
        alignItems: 'center', 
        height: 60,
        elevation: 1
    },
    imageStyle: { 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        marginHorizontal: 15 
    }
})