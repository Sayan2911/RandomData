import { uniqueNamesGenerator, names } from 'unique-names-generator';

const config = {
  dictionaries: [names],

}



const characterName= uniqueNamesGenerator(config);
 const namess=()=>{
   
    return characterName
}


export const emailss=()=>{
    const email= characterName +"@email.com"
    
    return email
}


export const numberss=()=>{
    const number=Math.floor(Math.random()*10000000000)
   
    return number
}

export const Name=namess()
export const Email=emailss()
export const Number=numberss()




