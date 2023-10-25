function calcularArea() {

            
    // Obtenha os valores inseridos pelo usuário
    // Métodos e propriedades
    // getElementById seleciona o elemento com base no ID. 
    // Também existe o querySelector
    var raioMaior = parseFloat(document.getElementById('raioMaior').value); //20.0
    var raioMenor = parseFloat(document.getElementById('raioMenor').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcule a área do tronco de pirâmide
    // Podemos utilizar a biblioteca Math do javascript
    var area = Math.PI * (raioMaior + raioMenor) * (raioMaior - raioMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));
    
    // Exiba o resultado na página
    document.getElementById('resultado').textContent = area.toFixed(2);
    // toFixed limita o valor a "x" casas após a virgúlas.  
}