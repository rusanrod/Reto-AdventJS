const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
      value: 2, // el nodo izquierdo necesita dos decoraciones
      left: null, // no tiene más ramas
      right: null // no tiene más ramas
    },
    right: {
      value: 3, // el nodo de la derecha necesita tres decoraciones
      left: null, // no tiene más ramas
      right: null // no tiene más ramas
    }
  }
  const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }
// let decoraciones = 0
function isObject(obj){
    return Object.prototype.toString.call( obj ) === '[object Object]'
  }

function iterator(obj){
    // decoraciones += obj.value
    let acumulado = 0
    acumulado += obj.value
    if(isObject(obj.left)){
        // console.log(obj.left)
        acumulado += iterator(obj.left)
    }
    if(isObject(obj.right)){
        // console.log(obj.right)
        acumulado += iterator(obj.right)
    }
    return acumulado
}

function countDecorations(bigTree) {
    // ¡No olvides compartir tu solución en redes!
    let decoraciones = 0
    decoraciones = iterator(bigTree)
     return decoraciones
   }

console.log(countDecorations(bigTree))