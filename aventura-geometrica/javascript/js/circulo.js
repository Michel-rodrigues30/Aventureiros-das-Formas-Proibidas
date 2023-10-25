function calcularArea() {
    // O valor inserido pelo usuário para o raio
   var raio = parseFloat(document.getElementById('raio').value);
    
    // Calcule a área do círculo
   var area = Math.PI * Math.pow(raio, 2);
    
    // Mostra o resultado na página
    document.getElementById('resultado').textContent = area.toFixed(2);
 }
 