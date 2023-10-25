function calcularArea() {
    var raioExterno = parseFloat(document.getElementById('raioExterno').value);
    var raioInterno = parseFloat(document.getElementById('raioInterno').value);

    var area = Math.PI * (Math.pow(raioExterno, 2) - Math.pow(raioInterno, 2));

    document.getElementById('resultado').textContent = area.toFixed(2);
}
