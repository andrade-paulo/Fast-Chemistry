function isupper(str){
    if (isNaN(str * 1)){
        if (str != " " && str != "" && str != "+"){
            if (str == str.toUpperCase()) {
                return true;
            }
            if (str == str.toLowerCase()){
                return false;
            }
        }
    }
}

function identificar(ex){
    let elementos = []
    let nmr = ""
    for (i=0; i<ex.length; i++){
        if (!isNaN(parseInt(ex[i]))){
            if(nmr.length >= 1){
                nmr += ex[i]
            } else{
                nmr = ex[i]
            }
        } 
        if (ex[i] != "+" && ex[i] != " " && ex[i] != "" && isNaN(ex[i])){ 
            if (isupper(ex[i])){
                aux = ex[i]
            } else if (!isupper(ex[i])){
                aux += ex[i]
            }
        } 
        if (i == ex.length - 1 || ex[i] == " " || (ex[i] != " " && isupper(ex[i + 1]))){
            if (ex[i - 1] != "+" && ex[i] != "+"){
                if(nmr == 0){
                    nmr = 1
                }
                elementos.push([aux, nmr])
                nmr = 0
            }
        }
    }
    return elementos
}

rgnts = "KMnO4 + HCl"
prdt = "KCl + MnCl2 + H2O + Cl2"

console.log("Reagentes:")
console.log(identificar(rgnts))
console.log("Produtos:")
console.log(identificar(prdt))