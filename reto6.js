let n1 = [3, 5, 7, 2]
let r1 = 10
function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!}
    let arr=[]
    for(let i = 0; i <= numbers.length - 2; i++){
        for(let j = i + 1; j <= numbers.length-1; j++){
            if((numbers[i] + numbers[j] == result)&&(arr.length==0)){
                arr[0] = numbers[i]
                arr[1] = numbers[j]
            }
        }
    }
    if(arr.length==0){
        arr=null
    }
    return arr
  }

  console.log(sumPairs([6, 7, 3, 2], 8))