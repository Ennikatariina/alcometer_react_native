import React from 'react';
import { Alert} from 'react-native';


const createAlert = () =>
    Alert.alert('Alert', 'Enter your weight', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    
    export {createAlert}