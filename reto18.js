const files = ['photo', 'postcard', 'photo', 'photo', 'video']
function fixFiles(files) {
    // ¡No olvides compartir tu solución en redes!
     let singleArr=[]
     let ocurrences=[]
     let newFiles=[]
     files.forEach((file) => {
        let index = singleArr.indexOf(file)
        if(index!=-1){
            ocurrences[index]++
            newFiles.push(`${file}(${ocurrences[index]})`)

        }
        else{
            singleArr.push(file)
            ocurrences.push(0)
            newFiles.push(`${file}`)
        }
     })
    //  console.log(singleArr)
    //  console.log(ocurrences)
     return newFiles
}

fixFiles(files)