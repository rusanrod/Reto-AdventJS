const carta = ' bici coche balón _playstation  bici coche peluche  '

function listGifts(letter) {
    // ¡Tú puedes!
    let obj = {}
    letter=letter.trim().replace(/ /g,",").replace(/,,/,",")

    let arr = letter.split(/,/g)

    console.log(arr)
    arr.forEach(element => {
        if(!element.startsWith("_")){
            if(!obj[element]){
                obj[element] = 1
            }
            else{
                obj[element]++
            }    
        }
    })
    console.log(obj)
    return obj
}

listGifts(carta)