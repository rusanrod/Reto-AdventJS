const pricesBtc = [39, 18, 29, 25, 34, 32, 5]

function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
    let profit = -1
    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j<prices.length;j++){
            let resta = prices[j]-prices[i]
            if((prices[i] < prices[j]) && (resta>profit)){
                profit = resta
            }
        }
    }
    return profit
  }

  console.log(maxProfit(pricesBtc))