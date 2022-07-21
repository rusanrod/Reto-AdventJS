const date1 = new Date('Feb 1, 2022')

const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
}
function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const xmasD = 25
  const xmasM = 11
  const xmasY = 121
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getYear()
//   console.log(year)
  let dias = 0
  //desde el mismo año
  if(year == xmasY){
    if(month<xmasM){
        for(let i = month; i < xmasM; i++){
            dias += getDays(2021,i)
        }
        dias = dias +25 - day
    }
    if(month==xmasM){
        dias = xmasD-day
    }
  }
  //desde el futuro
  if(year>xmasY){
    for(let i = month; i>0; i--){
        dias += getDays(1900+year,i)
    }
    dias= -dias -day-6
  }
  return dias
}

console.log(daysToXmas(date1))