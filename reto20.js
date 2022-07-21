function containsñ(str){
    return str.indexOf('ñ') != -1
}

function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!"
    let abecedario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
    let contenido = []
    let carta = letter.replace(/ /g,"").toLowerCase()
    let ñ =  containsñ(carta)
    carta = carta.normalize('NFD').replace(/[\u0300-\u036f]/g,"").split("")
    console.log(carta)
    for(let i = 0; i < carta.length; i++){
        if((contenido.indexOf(carta[i]) == -1) && (abecedario.indexOf(carta[i]) != -1)){
            contenido.push(carta[i])
        }
    }
    console.log(contenido)
     return contenido.length == 26 && ñ
   }

// pangram("hola pérritas úUU")
console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false