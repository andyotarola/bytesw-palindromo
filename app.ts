const isPalindrome = (text: string) => {

    const reverseText = trasform(text).split("").reverse().join("")

 
    return text === reverseText ? 'Es palíndromo': 'No es palíndromo'

}

// Quitar espacios en blanco y covertir a minúsculas
const trasform = (text:string):string => {

    return text.toLowerCase().trim()
}


console.log(isPalindrome("oso"));
