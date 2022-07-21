const obstacles = [9, 5, 1]
function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!
    // let jump = 0
    let allFree = true
    for(let i = 1; i < 10;i++){
        allFree = true
        obstacles.forEach(el => {
            if(el%i === 0){
                allFree = false
            }
        })
        if(allFree){
            return i
        }
    }
    return 10
}

console.log(getMinJump(obstacles))