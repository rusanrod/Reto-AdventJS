const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
  const room3 = [
    ['*', '*', '*'],
    ['*', 'm', '*'],
    ['*', '*', '*']
  ]
  const room4 = [
    ['*','m']
  ]
function find(item, game){
    let fila = 0 
    let columna = 0
    for(let i = 0; i < game.length; i++){
        let col = game[i].indexOf(item)
        if(col !=-1 ){
            fila = i
            columna = col
        }
    }
    return [fila,columna]   
}

function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    console.log(direction)
    console.log(game)
    let mouse = []
    if(game.length > 1){
      // console.log("hoa")
      mouse = find('m', game)
      // console.log(mouse)
      switch(direction){
        case 'up':
        mouse[0]--
        break
        case 'down':
        mouse[0]++
        break
        case 'right':
        mouse[1]++
        break
        case 'left':
        mouse[1]--
        break
      }
      console.log(game[mouse[0]][mouse[1]] == '*')
      return game[mouse[0]][mouse[1]] == '*'
    }
    else{ 
      mouse = game[0].indexOf('m')
      switch(direction){
        case 'up':
        return false
        case 'down':
        return false
        case 'right':
        mouse++
        break
        case 'left':
        mouse--
        break
      }
      //console.log(game[mouse] == '*')
      return game[0][mouse] == '*'
    }
    
}
console.log(canMouseEat('up',room4))