const carta1 = "bici coche (balón) bici coche peluche ( )" //ok
const carta2 = "(peluche { bici" //not
const carta3 = "(bici [coche)"
const carta4 = "(()) bici"
const carta5 = "(muñeca) consola bici"
const carta6 = "(a) (b) (c)"

function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    let valida = true
    let noBracket = true
    let noSpaces = true
    let closes = true
    let arr = letter.replace(/ /g,"").split("")
    let dentro = false
    let charDentro = 0

    
    arr.forEach(el => {
        // console.log(el)
        if(dentro){
            // console.log("2")
            switch(el){
                case ')':
                    if(charDentro > 0){
                        noSpaces=true
                        closes = true
                    }
                    else{
                        noSpaces = false
                    }
                    console.log("3")
                    dentro = false
                    charDentro = 0
                break
                case '{':
                    noBracket = false
                    charDentro++                    
                break
                case '[':
                    noBracket = false
                    charDentro ++
                break
                case '(':
                    noBracket =false
                    charDentro++

                default:
                    charDentro++
                break
            }
        }
        if(el==="("){
            dentro = true
            closes = false
            console.log("1")
        }
        
    })
    valida = noBracket && noSpaces && closes
    console.log(noBracket)
    console.log(noSpaces)
    console.log(closes)

    return valida
   }

console.log(isValid(carta6))