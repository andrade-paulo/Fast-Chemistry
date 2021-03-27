function ligInc(){
    // |> Input <| 
    let firstElmnt = document.getElementById('fE').value;
    let secondElmnt = document.getElementById('sE').value;
    let z1 = Number(document.getElementById('z1').value);
    let z2 = Number(document.getElementById('z2').value);
    let resp = document.getElementById('result');

    // |> Extra functions <|
    function sum(arrey){
        let sum = 0;
        for (i=0;i<arrey.length;i++) {sum += arrey[i];}
        return sum
    }

    function count(array, value) {
        return array.filter((v) => (v === value)).length;
    }

    // |> Camada de Valência <|
    function cmdVlnc(numAtm){
        let distEletronica = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6];
        let distCamada = [1, 2, 2, 3, 3, 4, 3, 4, 5, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7];
        let cam = [];
        let posMa = [];
        let eltrnVlnc = [];
        let distEltrncAtm = [];
        let eletrons = x = ma = 0;

        while (eletrons != numAtm){
            if (eletrons + distEletronica[x] <= numAtm){
                eletrons += distEletronica[x];
                cam.push(distCamada[x]);
                distEltrncAtm.push(distEletronica[x]);
                if (eletrons != numAtm){
                    x += 1;
                }
            } else{
                cam.push(distCamada[x]);
                distEltrncAtm.push(numAtm - eletrons);
                eletrons += numAtm - eletrons;
            }
        }

        for (i=0; i<cam.length; i++){
            if (i == 0){
                ma = cam[i];
            } else{
                if (cam[i] > ma){
                    ma = cam[i];
                }
            }
        }

        for (i=0; i<count(cam, ma); i++){
            if (i == 0){
                posMa.push(cam.indexOf(ma));
            } else{
                posMa.push(cam.indexOf(ma, posMa[i - 1] + 1));
            }
        }

        for (i=0; i<posMa.length; i++){
            eltrnVlnc.push(distEltrncAtm[posMa[i]]);
        }

        let cmd_Valencia = sum(eltrnVlnc);
        return cmd_Valencia;
    }

    // |> Ligação Iônica <|
    function ligIonica(nAtm1, nAtm2){
        let cVlnc1 = cmdVlnc(nAtm1);
        let cVlnc2 = cmdVlnc(nAtm2);
        let ok = 0;

        if (cVlnc1 < 4){
            qntAtm2 = cVlnc1;
            ok += 1;

        } else if (cVlnc1 > 4){
            qntAtm2 = 8 - cVlnc1;
            ok += 1;

        } else{window.alert('Valor Inválido!')}

        if (cVlnc2 < 4){
            qntAtm1 = cVlnc2;
            ok += 1;

        } else if (cVlnc2 > 4){
            qntAtm1 = 8 - cVlnc2;
            ok += 1;

        } else{window.alert('Valor Inválido!')}

        if (ok == 2){
            if (qntAtm1 == qntAtm2){
                aux = qntAtm1;
                qntAtm1 /= aux;
                qntAtm2 /= aux;
            }

            lgc = [qntAtm1, qntAtm2];
            return lgc;
        }
    }


    // |> Output <|
    let res = ligIonica(z1, z2);

    if (res[0] == 1 && res[1] != 1){
        resp.innerHTML = `Resultado: ${firstElmnt}${secondElmnt}${res[1]}`

    } else if (res[0] != 1 && res[1] == 1){
        resp.innerHTML = `Resultado: ${firstElmnt}${res[0]}${secondElmnt}`

    } else if (res[0] == 1 && res[1] == 1){
        resp.innerHTML = `Resultado: ${firstElmnt}${secondElmnt}`

    } else{
    resp.innerHTML = `Resultado: ${firstElmnt}${res[0]}${secondElmnt}${res[1]}`
    }
}
