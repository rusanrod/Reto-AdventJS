function canCarry(capacity, trip) {
    // ¡No olvides compartir tu solución en redes!
    let destino = 0
    let cuenta = 0
    trip.forEach(viaje => {
        if(viaje[2] > destino){
            destino=viaje[2]
        }
    })
    // console.log(destino)
    for(let i = 0; i <= destino; i++){
        for(let j = 0; j < trip.length; j++){
            //verificar si hay que entregar regalos
            if(trip[j][2] == i){
                cuenta -= trip[j][0]
            }
            //verificar si hay que recoger regalos
            if(trip[j][1] == i){
                cuenta += trip[j][0]
            }
            if(cuenta > capacity){
                return false
            }
        }
    }
    return true
    
}
console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]]))
console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]]))
console.log(canCarry(3, [[2, 1, 5],[3, 5, 7]]))