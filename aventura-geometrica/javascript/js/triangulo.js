function calcularArea() {
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);

    var area = comprimento * largura;

    document.getElementById('resultado').textContent = area.toFixed(2);
}