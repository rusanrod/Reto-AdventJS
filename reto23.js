function canReconfigure(from, to) {
    // ¡No olvides compartir tu solución en redes!
    let desde = from.split("")
    let a = to.split("")
    if(desde.length != a.length){
        return false
    } else{
        // let pares = [['X','X'],['X','X'],['B','O'],['O','B']]
        let pares = []
        for(let i = 0; i < desde.length; i++){
            let par = [desde[i], a[i]]
            let parR = [a[i], desde[i]]
            let bool1 = pares.some((el)=>el[0]==par[0])
            let bool2 = pares.some((el)=>el[1]==par[1])
            // console.log(pares)
            if(bool1 && bool2){
                // console.log("lo encontre")
            }else if(bool1 || bool2){
                // console.log("solo encontre uno")
                return false
            } else if(!(bool1 && bool2)){
                // console.log("no encontre nada")
                pares.push(par)
                pares.push(parR)
            } 
        }
        
    }
     return true
   }


//    console.log(canReconfigure('BAL','LIB'))
   console.log(canReconfigure('CON','JUU'))
//    console.log(canReconfigure('XAON','XOBM'))