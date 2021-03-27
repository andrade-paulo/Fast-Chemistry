function emiAlfaBeta() {
    var aI = Number((document.getElementsByName('massaInic')[0]).value)
    var aF = Number((document.getElementsByName('massaFin')[0]).value)
    var zI = Number((document.getElementsByName('nAtmInic')[0]).value)
    var zF = Number((document.getElementsByName('nAtmFin')[0]).value)

    if(aI == 0 || aF == 0 || zI == 0 || zF == 0){
        window.alert('Está faltando valores!')
    } else{
        var totAlfa = (aI - aF) / 4
        var totBeta = zF - (zI - totAlfa * 2)
        document.querySelector('h3#result').innerHTML = `Alfa: ${totAlfa} | Beta: ${totBeta}`
    }
}