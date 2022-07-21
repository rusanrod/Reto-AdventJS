function isObject(obj){
  return Object.prototype.toString.call( obj ) === '[object Object]'
}

function isString(str){
  return Object.prototype.toString.call( str ) === '[object String]'
}
function groupBy(collection, it) {
    // ¡No olvides compartir tu solución en redes!

    //verificamos si es un arreglo de objetos, en caso afirmativo, it debe ser una key
    let property
    let organized = new Object()
    if(isObject(collection[0])){
      for(let i = 0; i < collection.length; i++){
        property = collection[i][it]
        if(!organized[property]){
          organized[property]=[]
          organized[property].push(collection[i])
        } else{
          organized[property].push(collection[i])
        }
      }
    }
    else{
      if(isString(it)){
        //it must be 'length'
        for(let i = 0; i<collection.length; i++){
          property = collection[i].length
          if(!organized[property]){
            organized[property]=[]
            organized[property].push(collection[i])
          } else{
            organized[property].push(collection[i])
          }
        }
      }
      else{
        for(let i = 0; i<collection.length; i++){
          property = it(collection[i])
          if(!organized[property]){
            organized[property]=[]
            organized[property].push(collection[i])
          } else{
            organized[property].push(collection[i])
          }
        }
      }
    }
    // console.log(organized)
    return organized
  }
  // console.log(groupBy([1397639141184, 1363223700000],timestamp => new Date(timestamp).getFullYear()))
  // console.log(groupBy(['one', 'two', 'three'], 'length'))
  console.log(groupBy([{age: 23}, {age: 24}], 'age'))
  // groupBy([
  //   { title: 'JavaScript: The Good Parts', rating: 8 },
  //   { title: 'Aprendiendo Git', rating: 10 },
  //   { title: 'Clean Code', rating: 9 },
  // ], 'rating')
