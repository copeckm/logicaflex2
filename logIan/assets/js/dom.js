function contador(){
    let contador = Number(document.getElementById("cont").innerHTML)
    contador++
    document.getElementById('cont').innerHTML = contador

}
function inserirTexto(){
    let texto = prompt("digite um texto")
    document.getElementById('texto').value = texto
}