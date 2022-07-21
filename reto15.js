const alturas=[1, 2, 3, 2, 1]
const alturas1=[0,1,0]
const alturas2=[2, 4, 4, 6, 2]

function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!
    let mayor = 0

    //obtener el mayor y su indice
    heights.forEach(el => {
        if(el>mayor){
            mayor=el
        }
    })
    let mayorIndex = heights.indexOf(mayor)
    // verificar que la primera parte sea de subida
    let subida = false
    let subida1 = true
    for(let i = 0; i < mayorIndex; i++ ){
        let next = i+1
        if(heights[i] < heights[next]){
            // console.log(`${i} : ${heights[i]} : ${heights[next]}`)
            subida = true
        } else{
            subida1=false
        }
    }
    //verificar que la segunda parte sea de bajada
    let bajada = false
    let bajada1 = true
    for(let i = mayorIndex; i < heights.length-1 ;i++ ){
        if(heights[i] > heights[i+1]){
            bajada = true
        }else{
            bajada1=false
        }
    }
    // console.log(subida)
    // console.log(bajada)
    return bajada && subida && bajada1 && subida1
  }

  console.log(checkSledJump(alturas2))