import {RadioButton} from 'react-native-paper';
import { Text, View } from 'react-native';


export default function RadioButtonComponent(props) {

    
    return(
        <View>
            <RadioButton.Group value={props.gender} onValueChange={s => props.setgender(s)}>
                <View style={props.currentStyle.radioStyle}>
                    <RadioButton 
                        value='male' 
                        color={props.currentStyle.uncheckedColor}
                        status={ props.gender === 'male' ? 'checked' : 'unchecked' }
                    />
                    <Text style={props.currentStyle.radioText}>Male</Text>
                </View>  
                <View style={props.currentStyle.radioStyle}>
                    <RadioButton 
                    value='female'
                    color={props.currentStyle.uncheckedColor}
                    status={props.gender === 'female' ? 'checked' : 'unchecked' }
                    />
                    <Text style={props.currentStyle.radioText}>Female</Text>
                </View>  
            </RadioButton.Group>
        </View>


    )}