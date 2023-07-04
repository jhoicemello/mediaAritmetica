

function calculoMedia() {
    var n1 = 
    parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    var n3 = parseInt(document.getElementById("numero3").value);
    var media = (n1 + n2 + n3) / 3;
    var contentMedia = document.querySelector(".media");

    
    contentMedia.append("A média dos três números é : " + media);
}

function limpar() {
    var n1 = 
    document.getElementById("numero1");
    var n2 = document.getElementById("numero2");
    var n3 = document.getElementById("numero3");
    n1.value = '';
    n2.value = '';
    n3.value = '';
    var contentMedia = document.querySelector(".media");
    contentMedia.innerText = '';
}