import {RadioButton} from 'react-native-paper';
import { SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';


export default function RadioButtonComponent(props) {

    
    return(
        <View>
            <RadioButton.Group value={props.sexual} onValueChange={s => props.setSexual(s)}>
                <View style={props.currentStyle.radioStyle}>
                    <RadioButton 
                        value='male' 
                        color={props.currentStyle.uncheckedColor}
                        status={ props.sexual === 'male' ? 'checked' : 'unchecked' }
                    />
                    <Text style={props.currentStyle.radioText}>Male</Text>
                </View>  
                <View style={props.currentStyle.radioStyle}>
                    <RadioButton 
                    value='female'
                    color={props.currentStyle.uncheckedColor}
                    status={props.sexual === 'female' ? 'checked' : 'unchecked' }
                    />
                    <Text style={props.currentStyle.radioText}>Female</Text>
                </View>  
            </RadioButton.Group>
        </View>


    )}