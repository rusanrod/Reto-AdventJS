function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let tree=""
    for(let i = 1; i<=height;i++){
        let str=""
        //primero los guiones de la izquierda (h-i-1)
        for(let j = 0; j <= height-i-1; j++){ str += "_"}
        //despues los astericos (2*i-1)
        for(let j = 0; j < 2*i-1; j++){str += "*"}
        //al ultimo las guiones de la derecha (h-i-1)
        for(let j = 0; j <= height-i-1; j++){str += "_"}
        str = str.concat('\n')
        //en total todas las lineas tienen (2*height-1) elementos
        tree = tree.concat(str)
    }
    for(let j = 0; j <= height-2; j++){tree += "_"}
    tree += "#"
    for(let j = 0; j <= height-2; j++){tree += "_"}
    tree = tree.concat('\n')
    for(let j = 0; j <= height-2; j++){tree += "_"}
    tree += "#"
    for(let j = 0; j <= height-2; j++){tree += "_"}
    return tree
}

console.log(createXmasTree(10))