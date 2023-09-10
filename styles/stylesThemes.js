import { StyleSheet } from "react-native";


const BasicStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f1efef",
        
    },
    textInputStyle:{
        margin:10,
        padding: 5,
        borderBottomWidth:1,
        borderBottomColor:'#090001',
        marginBottom: 10,
        width:400, 
        backgroundColor:'#c4bfbf' 
    },
    radioStyle:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    switchStyle:{
        margin:20,
        padding:10
    },
    header:{
        textAlign:'center',
        fontSize:33,
        fontWeight:'bold',
        margin: 40
    },
    header_h2:{
        textAlign:'left',
        fontSize:22,
        fontWeight:'bold',
        margin:5,
    },
    numericInputStyle:{
        margin: 10,
        
    },
    buttonStyle:{
        backgroundColor: '#c4bfbf',
        padding: 20,
        borderRadius: 5,
        borderWidth:1,
        margin:40,
        marginLeft: 60,
        marginRight:60
    },
    radioText:{
        fontSize:22, 
        fontWeight:'bold',
        color:'#050505',
    },
    resultText:{
        textAlign:'center',
        fontSize:45,
        fontWeight:'bold'
    },

    rightButtonBackgroundColor: '#5a6cdb',
    leftButtonBackgroundColor: '#5a6cdb',
    trackColor1:'#e78719', //Tämä ei toimi iphonessa. Toimiikohan androidilla?
})


//DARKSTYLE
const DarkStyle = StyleSheet.create({
    container:{
        ...BasicStyle.container,
        backgroundColor:"#3a3a3d"
    },
    textInputStyle:{
        ...BasicStyle.textInputStyle,
        backgroundColor:'#efe6e6' 
    },
    radioStyle:{
        ...BasicStyle.radioStyle,
        color:'#f7f2f2'
        
    },
    switchStyle:{
        ...BasicStyle.switchStyle,
    },
    header:{
        ...BasicStyle.header,
        color:'#ffffff'
    },
    header_h2:{
        ...BasicStyle.header_h2,
        color:'#ffffff'
    },
    numericInputStyle:{
        ...BasicStyle.numericInputStyle,
        
    },
    buttonStyle:{
        ...BasicStyle.buttonStyle,
        backgroundColor: '#c4bfbf',
    },
    radioText:{
        ...BasicStyle.radioText,
        color:'#f7f2f2',
        fontSize:22
        
    },
    resultText:{
        ...BasicStyle.resultText,
        color:'white'
    },
    rightButtonBackgroundColor: '#daddf1',
    leftButtonBackgroundColor: '#daddf1',
    textColorNumberInput:'#daddf1',
    trackColor2:'#0560d7',
    uncheckedColor:'#f1ecf3',

})

export {BasicStyle,DarkStyle}