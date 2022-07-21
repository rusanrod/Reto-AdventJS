function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    const single = 12 * times
    let fidelity = 250

    for(let i=1; i<=times;i++){
        fidelity += (12*Math.pow(.75,i))
    }

    return fidelity<single
  }

  console.log(shouldBuyFidelity(100))