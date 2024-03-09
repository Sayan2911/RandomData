import { uniqueNamesGenerator, names } from 'unique-names-generator';

const config = {
  dictionaries: [names],

}

// const characterName= uniqueNamesGenerator(config);
// console.log(characterName);


const characterName= uniqueNamesGenerator(config);
const name=()=>{
    console.log(characterName);
    return characterName
}
name()

const email=()=>{
    const email= characterName +"@email.com"
    console.log(email);
    return email
}
email()

const number=()=>{
    const number=Math.floor(Math.random()*10000000000)
    console.log(number);
    return number
}

number()

module.exports=name
module.exports=email
module.exports=number