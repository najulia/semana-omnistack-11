import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText:{
        fontSize: 15,
        color: '#737390',

    },

    headerTextBold:{
        fontWeight: 'bold'
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
    color: '#7373980'   
    },

    casosList:{
        marginTop: 32,
    },

    casos: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    casosProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },
    
    casosValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detalhesButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detalhesButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'

    }

   
});