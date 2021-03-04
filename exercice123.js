var tab=[10,5,15,7,20,6];
document.getElementById("tableau").innerHTML = tab
// console.log(tab);
function calcul() {
    let min1 = Math.min(...tab);
    let tab1 = tab.filter(x =>x != min1);
    // console.log(tab1);
    let min2 = Math.min(...tab1);
    // console.log(min2);
    let s = min1 + min2 ;
    // console.log("le somme des deux nombres min est",s);
    document.getElementById("resultat").innerHTML = "le somme des deux nombres min en tableau est " + s
}

var array=[1,-4,7,12];
document.getElementById("tableau1").innerHTML = array
function Somme(){
    let s=0;
    array.forEach(x => {
        if (x > 0) {
            s+= x ;
        }
    });
    document.getElementById("resultat1").innerHTML ="le somme de tous les entiers Positif est " + s
}

function reduire(){
    let ch1 = document.getElementById("chaine1").value;
    let ch2 = document.getElementById("chaine2").value;
    let chf= ch1[0].toUpperCase()+"."+ch2[0].toUpperCase()
    document.getElementById("resultat2").innerHTML = "Resultat :  "+ chf
    
}
