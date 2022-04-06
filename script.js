function aprov(image) {
    var imagem = document.getElementById("imagem");
    var n1 = document.getElementById("nota01");
    var n2 = document.getElementById("nota02");
    var resultado = document.getElementById("resultado");
    var total = Number(n1.value) + Number(n2.value);
    var nf = total / 2;
    resultado.innerHTML = `sua nota total foi : ${nf}<br>`
    if (nf >=6) {
        resultado.innerHTML +=  ("<strong>Aprovado!!!</strong>");
        image.src="alegre.ico";
    }
    else{
        resultado.innerHTML += ("<strong>Reprovado!!!</strong> da proxima estude mais");
        image.src="raiva.ico";
    }
}
