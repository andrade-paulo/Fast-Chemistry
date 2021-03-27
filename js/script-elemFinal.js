function elemFinal() {
    var aI = Number((document.getElementsByName('massaInic')[0]).value);
    var zI = Number((document.getElementsByName('numAtmc')[0]).value);
    var alf = Number((document.getElementsByName('partAlf')[0]).value);
    var beta = Number((document.getElementsByName('partBet')[0]).value);
    var resp = document.querySelector('h3#result');

    if(mI == 0 || zI == 0 || alf == 0 || beta == 0){
        window.alert('Está faltando valores!');
    } else{
        let aF = aI - (alf * 4);
        let zF = (zI - (alf * 2)) + beta;
        resp.innerHTML = `Massa Final: ${aF} | Número Atômico Final: ${zF}`;
    }
}