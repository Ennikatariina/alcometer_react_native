import { createAlert } from "./alert"

//function that calculates blood alcohol level.
  const bloodAlcoholLevel= (bottles, weight, hours, gender)=>{
    
    if (weight==0){
      createAlert()
    }
    else{
      grams= bottles*0.33*8*4.5
      burning=parseFloat(weight)/10
      grams= grams -burning*hours
      if (gender =="male"){
        result= grams/(weight*0.7)
      }
      
      else{
        result=grams/(weight*0.6)
      }
      if (result<0){
        result =0
      }
      return result.toFixed(2) 
  }}

  export{bloodAlcoholLevel}