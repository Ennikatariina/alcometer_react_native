import {Switch, View} from 'react-native';


export default function SwitchComponent (props){
    
    return(
        <View>
        <Switch style={props.currentStyle.switchStyle}
        value={props.isDarkMode}
        onValueChange={newValue =>props.setIsDarkMode(newValue)} 
        trackColor={{false: props.currentStyle.trackColor1, true: props.currentStyle.trackColor2}}
        />
        </View>
    )
}