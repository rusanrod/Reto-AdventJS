function missingReindeer(ids) {
    // ¡No olvides compartir tu solución en redes!
    let n = ids.length
    let suma = n*(n+1)/2
    // let acumulado=0
    for(let i = 0; i < n; i++ ){
        suma -= ids[i]
    }
    return suma
  }

//   console.log(missingReindeer([0, 1]))
  console.log(missingReindeer([3, 0, 1]))
//   console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]))