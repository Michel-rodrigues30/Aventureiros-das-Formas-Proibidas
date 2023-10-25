function calcularArea() {
    var baseMaior = parseFloat(document.getElementById('baseMaior').value);
    var baseMenor = parseFloat(document.getElementById('baseMenor').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);

    // Calcula a área do trapézio irregular usando a fórmula apropriada
    var area = (baseMaior + baseMenor) * altura / 2 + (lado1 + lado2) * altura / 2;

    document.getElementById('resultado').textContent = area.toFixed(2);
}