import { StatusBar } from "expo-status-bar";
import {SafeAreaView,Text,TextInput,View,Button,ScrollView,} from "react-native";
import Radiobutton from "./components/RadioButtonComponent";
import NumericInputBottles from "./components/NumericInputBottles";
import NumericInputHours from "./components/NumericInputHours";
import SwitchComponent from "./components/SwitchComponent";
import { useState } from "react";
import { BasicStyle, DarkStyle } from "./styles/stylesThemes";
import { colorOfTheResult } from "./functions/colorOfTheResult";
import { bloodAlcoholLevel } from "./functions/bloodAlcoholLevel";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentStyle = isDarkMode ? DarkStyle : BasicStyle;

  const [weight,setWeight]=useState(0);
  const [bottles, setBottles]=useState(0);
  const [hours, setHours] =useState(0);
  const [gender, setgender]=useState('male')
  const [resultAlcohol, setResultAlcohol]=useState('')

  
  return (
    <SafeAreaView style={currentStyle.container}>
      <ScrollView>

        <SwitchComponent
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          currentStyle={currentStyle}
        />
        <Text style={currentStyle.header}>Alcometer</Text>
        <Text style={currentStyle.header_h2}>Weight</Text>
        <TextInput
          value={weight.toString()}
          onChangeText={(enteredText)=>setWeight(enteredText)}
          keyboardType="decimal-pad"
          style={currentStyle.textInputStyle}
        />

        <Text style={currentStyle.header_h2}>Bottles</Text>
        <NumericInputBottles 
          currentStyle={currentStyle} 
          bottles={bottles}
          setBottles={setBottles}
          />
        <Text style={currentStyle.header_h2}>Hours</Text>
        <NumericInputHours 
          currentStyle={currentStyle} 
          hours={hours}
          setHours={setHours}
          />

        <Radiobutton 
          currentStyle={currentStyle}
          gender={gender}
          setgender={setgender}
          />
        
        <Text style={colorOfTheResult(resultAlcohol)}>{resultAlcohol}</Text>
        
        <View style={currentStyle.buttonStyle}>
          <Button 
            title="CALCULATE" 
            onPress={()=> setResultAlcohol(bloodAlcoholLevel(bottles, weight, hours, gender))}
            />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
