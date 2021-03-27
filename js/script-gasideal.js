function gasideal(){
    var p1 = Number((document.getElementById('pres1')).value);
    var v1 = Number((document.getElementById('vol1')).value);
    var t1 = Number((document.getElementById('temp1')).value);
    var p2 = Number((document.getElementById('pres2')).value);
    var v2 = Number((document.getElementById('vol2')).value);
    var t2 = Number((document.getElementById('temp2')).value);
    var resp = document.getElementById('result');

    if (p1 == 0 && v1 != 0 && t1 != 0 && p2 != 0 && v2 != 0 && t2 != 0) {
        p1 = p2 * v2 / t2 * t1 / v1;
        resp.innerHTML = `O valor da pressão inicial é ${p1.toFixed(2)}atm`;
    } else if (p1 != 0 && v1 == 0 && t1 != 0 && p2 != 0 && v2 != 0 && t2 != 0) {
        v1 = p2 * v2 / t2 * t1 / p1;
        resp.innerHTML = `O valor do volume inicial é ${v1.toFixed(2)}L`;
    } else if (p1 != 0 && v1 != 0 && t1 == 0 && p2 != 0 && v2 != 0 && t2 != 0){
        t1 = (p1 * v1) / (p2 * v2 / t2);
        resp.innerHTML = `O valor da temperatura inicial é ${t1.toFixed(2)}K`;
    } else if (p1 != 0 && v1 != 0 && t1 != 0 && p2 == 0 && v2 != 0 && t2 != 0) {
        p2 = p1 * v1 / t1 * t2 / v2;
        resp.innerHTML = `O valor da pressão final é ${p2.toFixed(2)}atm`;
    } else if (p1 != 0 && v1 != 0 && t1 != 0 && p2 != 0 && v2 == 0 && t2 != 0) {
        v2 = p1 * v1 / t1 * t2 / p2;
        resp.innerHTML = `O valor do volume final é ${v2.toFixed(2)}L`;
    } else if (p1 != 0 && v1 != 0 && t1 != 0 && p2 != 0 && v2 != 0 && t2 == 0) {
        t2 = (p2 * v2) / (p1 * v1 / t1);
        resp.innerHTML = `O valor da temperatura final é ${t2.toFixed(2)}K`;
    } else {
        window.alert('Por favor, digite valores válidos!');
    }
}