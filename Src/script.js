function atualizarContagem() {
    let texto = document.getElementById('texto').value
    let contagem = texto.replace(/ /g, "").length;
    document.getElementById('contagem').textContent = `${contagem} caracteres`;
}