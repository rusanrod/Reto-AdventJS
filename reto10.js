function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    const coins = [1, 2, 5, 10, 20, 50]
    let coin = 0
    let resto= change
    let combinacion = []
    for(let i = 5; i >= 0; i--){
        coin=0
        while(resto >= coins[i]){
            resto-=coins[i]
            coin++
        }
        combinacion[i]=coin
    }
    return combinacion
  }
  console.log(getCoins(51))