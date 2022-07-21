const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
  ]
// let acumulado = 0

function countPackages(carriers, carrierID) {

    let acumulado = 0
    let transportistas = [carrierID]
    // carriers[0] //ID-- string
    // carriers[1] //cuantos paquetes --- int 
    // carriers[2] //personas a cargo --- array
    for(let i = 0; i<carriers.length; i++){
        if(transportistas.some((transportista) => carriers[i][0]==transportista )){
            acumulado += carriers[i][1]
            // console.log(transportistas)
            transportistas = transportistas.concat(carriers[i][2])
            // console.log(transportistas)
        }
    }
    return acumulado
   }

console.log(countPackages(carriers, 'dapelu'))