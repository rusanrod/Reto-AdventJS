const gift=["📷", "⚽️"]
// console.log(gift[0].length)
function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    let regalo = []
    if(gifts.length==0){
        return []
    }
    else{
        let numAst = gifts[0].length + 2
        // let regalo = []
        let line =""
        for(let i = 1; i <= numAst ; i++){
            line += '*'
        }
        regalo.push(line)
        line = ""
        gifts.forEach(el => {
            line += '*' + el + '*'
            regalo.push(line)
            line = ""
        })
        for(let i = 1; i <= numAst ; i++){
            line += '*'
        }
        regalo.push(line)
    }
    return regalo
  }
  console.log(wrapGifts(gift))