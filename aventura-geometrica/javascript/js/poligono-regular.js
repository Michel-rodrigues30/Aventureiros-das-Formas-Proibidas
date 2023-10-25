function calcularArea() {
    var numLados = parseInt(document.getElementById('numLados').value);
    var comprimentoLado = parseFloat(document.getElementById('comprimentoLado').value);

    // Calcula a área do polígono regular dividindo-o em triângulos
    // A fórmula depende do número de lados (n) e do comprimento do lado (s)
    var area = (numLados * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / numLados));

    document.getElementById('resultado').textContent = area.toFixed(2);
}