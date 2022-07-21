function learn(time, courses) {
    // ¡No olvides compartir tu solución en redes!
    let cursos=[0, 0]
    let tTime = 0 //tiempo que tomarán los 2 cursos
    let indexI 
    let indexJ
    for(let i = 0; i < courses.length; i++){
        for(let j = i + 1; j < courses.length; j++){
            tTime = courses[i] + courses[j]
            if((tTime <= time) && (tTime > cursos[0] + cursos[1])){
                cursos[0]=courses[i]
                cursos[1]=courses[j]
                indexI = i
                indexJ = j
            }
        }
    }
    let indices = [indexI, indexJ]
    console.log(indices)
    if(!indices[0] && !indices[1]){
        return null
    }
     return indices
   }


   console.log(learn(10,[2,3,8,1,4]))
   console.log(learn(15, [2, 10, 4, 1]))
   console.log(learn(25, [10, 15, 20, 5]))
   console.log(learn(8, [8, 2, 1]))
   console.log(learn(8, [8, 2, 1, 4, 3]))
   console.log(learn(4, [10, 14, 20]))
   console.log(learn(5, [5, 5, 5]))
   console.log(learn(10,[1,1,1,1,1,1,1,1,1,5,5]))