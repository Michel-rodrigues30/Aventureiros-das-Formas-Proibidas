function calcularArea() {
    var raioMaior = parseFloat(document.getElementById('raioMaior').value);
    var raioMenor = parseFloat(document.getElementById('raioMenor').value);
    var anguloSetor = parseFloat(document.getElementById('anguloSetor').value);

    // Converter o ângulo de graus para radianos
    var anguloRadianos = (anguloSetor * Math.PI) / 180;

    // Calcular a área do setor circular
    var areaSetor = (anguloRadianos / (2 * Math.PI)) * Math.PI * Math.pow(raioMenor, 2);

    // Calcular a área do triângulo formado pelo raio do setor
    var areaTriangulo = (1/2) * raioMenor * raioMenor * Math.sin(anguloRadianos);

    // Calcular a área do círculo maior
    var areaCirculoMaior = Math.PI * Math.pow(raioMaior, 2);

    // Área total é a área do setor - área do triângulo + área do círculo maior
    var areaTotal = areaSetor - areaTriangulo + areaCirculoMaior;

    document.getElementById('resultado').textContent = areaTotal.toFixed(2);
}