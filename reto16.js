function decodeNumber(symbols) {
    // ¡No olvides compartir tu solución en redes!
    let simb = symbols.split("")
    let value = 0
    const code = {
        '.' : 1,
        ',' : 5,
        ':' : 10,
        ';' : 50,
        '!' : 100
    }

    for(let i = 0; i < simb.length ;i++){
        if(!code[simb[i]]){
            return NaN
        }
        if(code[simb[i]] < code[simb[i+1]]){
            value -= code[simb[i]]
        }else{
            value += code[simb[i]]
        }
       
    }
     return value
   }

   console.log(decodeNumber('........!')) // 3)