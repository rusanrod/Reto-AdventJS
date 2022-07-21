const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
const almacen2 = {
    'producto1': 'coca-cola',
    'producto2': 'fanta',
    'producto3': 'sprite'
}
function isObject(obj){
  return Object.prototype.toString.call( obj ) === '[object Object]'
}

function iterator(obj, product){
    //primero busca en keys 
    let keys = Object.keys(obj)
    // console.log(keys)
    let values = Object.values(obj)
    // console.log(values)
    let found = keys.some(el => el == product)
    //si no encuentra, lo busca en values
    if(!found){
      // console.log(values)
      found = values.some(el => el == product)
      for(let i = 0;i < keys.length;i++){
        if(!found && isObject(obj[keys[i]])){
          found = iterator(obj[keys[i]], product)
        }
      }
    }
    return found
}
function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    let exist = false
    exist = iterator(store, product)
    return exist
  }
console.log(contains(almacen,"sprite"))

