function clayperon(){
    var p = Number((document.getElementById('pres')).value);
    var v = Number((document.getElementById('vol')).value);
    var n = Number((document.getElementById('mol')).value);
    var t = Number((document.getElementById('temp')).value);
    var resp = document.getElementById('result');

    if (p == 0 && v != 0 && n != 0 && t != 0) {
        p = (n * 0.082 * t) / v;
        resp.innerHTML = `O valor da pressão é ${p.toFixed(2)}atm`;
    } else if (v == 0 && p != 0 && n != 0 && t != 0) {
        v = (n * 0.082 * t) / p;
        resp.innerHTML = `O valor do volume é ${v.toFixed(2)}L`;
    } else if (n == 0 && p != 0 && v != 0 && t != 0){
        n = (p * v) / (0.082 * t);
        resp.innerHTML = `O número de mols é ${n.toFixed(2)}mols`;
    } else if (t == 0 && p != 0 && v != 0 && n != 0) {
        t = (p * v) / (n * 0.082);
        resp.innerHTML = `O valor da temperatura é ${t.toFixed(2)}K`;
    } else {
        window.alert('Por favor, digite valores válidos!');
    }
}