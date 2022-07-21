const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


function contarOvejas(ovejas) {
  // aquí tu magia
  let ov=[]
  ov = ovejas.filter((oveja)=>{
   return oveja.color=='rojo'
  } ).filter((oveja)=>{
    let nombre = oveja.name.toLowerCase()
    if(nombre.includes('a') && nombre.includes('n')){
        return oveja
    }
  })
  return ov
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)