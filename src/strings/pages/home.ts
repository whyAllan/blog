import Avaliableslanguages from "../../utils/Avaliableslanguages"
import type { Home } from "../../utils/interfaces"

export default function getHomeStrings(language: string ): Home | undefined {
    
    // In case of a not suported language
    if (!Avaliableslanguages.includes(language))
    {
        console.log("language not avaliable")
    }


    
    if (language === "en")
    {
       const result : Home ={
        welcome: "hello",
        intro:"intro",
        ontro:"ontro"
       }

       return result
    }
    
}