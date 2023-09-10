import { resultColor } from "../styles/resultColor"

const colorOfTheResult= (resultAlcohol)=>{
    if (resultAlcohol<0.5){
        return(resultColor.textColorGreen)
    }
    else if (0.5<resultAlcohol &&resultAlcohol <1.5) {
        return(resultColor.textColorYellow)
    }
    else {
        return(resultColor.textColorRed)
    }
}
export {colorOfTheResult}