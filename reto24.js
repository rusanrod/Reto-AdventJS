const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  }
  
//   checkIsSameTree(tree, tree) // true
  
  const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
  }

function isObject(obj){
    return Object.prototype.toString.call( obj ) === '[object Object]'
  }
function iterator(obj){
    // decoraciones += obj.value
    // let acumulado = 0
    acumulado.push(obj.value)
    if(isObject(obj.left)){
        // console.log(obj.left)
        iterator(obj.left)
    }
    if(isObject(obj.right)){
        // console.log(obj.right)
        iterator(obj.right)
    }
    // return acumulado
}
let acumulado = []
function checkIsSameTree(treeA, treeB) {
    // ¡No olvides compartir tu solución en redes!
    let arrTreeA = []
    let arrTreeB = []

    iterator(treeA)
    arrTreeA = acumulado
    acumulado = []
    iterator(treeB)
    arrTreeB = acumulado
    acumulado = []
    // console.log(arrTreeA)
    // console.log(arrTreeB)
    if(arrTreeA.length != arrTreeB.length){
        return false
    } else {
        for(let i = 0 ; i < arrTreeA.length; i++){
            if(arrTreeA[i] != arrTreeB[i]){
                return false
            }
        }
    }
     return true
   }
   console.log(checkIsSameTree(tree2,tree2))