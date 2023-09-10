import NumericInput from 'react-native-numeric-input';
import { View } from 'react-native';

export default function NumericInputBottles(props) {
   
    return(
        <View  style={props.currentStyle.numericInputStyle}>
            <NumericInput
                value={props.bottles}
                onChange={number =>props.setBottles(number)}
                minValue={0}
                rightButtonBackgroundColor= {props.currentStyle.rightButtonBackgroundColor}
                leftButtonBackgroundColor={props.currentStyle.leftButtonBackgroundColor}
                rounded
                textColor={props.currentStyle.textColorNumberInput}
            />
        </View>
    )
}