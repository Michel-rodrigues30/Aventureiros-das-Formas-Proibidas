function calcularArea() {
    // O valor inserido pelo usuário para o lado do quadrado
    var lado = parseFloat(document.getElementById('lado').value);

    // Calcule a área do quadrado
    var area = lado * lado;

    // Mostra o resultado na página
    document.getElementById('resultado').textContent = area.toFixed(2);
}