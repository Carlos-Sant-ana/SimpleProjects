function calcular() {
// Obter os valores dos campos do formulário
let P1 = parseFloat(document.getElementById("P1").value);
let P2 = parseFloat(document.getElementById("P2").value);
let d = parseFloat(document.getElementById("d").value);
let g = 9.81;
let H1 = parseFloat(document.getElementById("H1").value);
let H2 = parseFloat(document.getElementById("H2").value);
let V1 = parseFloat(document.getElementById("V1").value);
let V2 = parseFloat(document.getElementById("V2").value);

//Converte a Pressão
// Obter a unidade da pressão e converter
let unidadeP1 = document.getElementById('unidadeP1').value;
let PressãoConvertida = 0;

if (unidadeP1 === 'Pa1') {
    PressãoConvertida = P1;
}   
    else if (unidadeP1 === 'Psi1') {
    PressãoConvertida = P1 * 6894.76;
}
    else if (unidadeP1 === 'P1D') {
    PressãoConvertida = 0;
} 
    else {
    console.error("Unidade P1 inválida. Utilize 'km' ou 'm'.");
    document.getElementById("resultado").textContent = "Unidade inválida";
    return; // Interrompe a função
}
//--------------------------------------

//Converte a Pressão
// Obter a unidade da pressão e converter
let unidadeP2 = document.getElementById('unidadeP2').value;
let PressãoConvertida2 = 0;

if (unidadeP2 === 'Pa2') {
    PressãoConvertida2 = P2;
} else if (unidadeP2 === 'Psi2') {
    PressãoConvertida2 = P2 * 6894.76;
} else {
    console.error("Unidade P2 inválida. Utilize 'km' ou 'm'.");
    document.getElementById("resultado").textContent = "Unidade inválida";
    return; // Interrompe a função
}
//--------------------------------------

//Converte a Dencidade
// Obter a unidade da dencidade e converter
let unidadeD = document.getElementById('unidadeD').value;
let DensidadeConvertida = 0;

if (unidadeD === 'kg') {
    DensidadeConvertida = d;
} else if (unidadeD === 'lb') {
    DensidadeConvertida = d * 16.01846;
} else {
    console.error("Unidade A1 inválida. Utilize 'km' ou 'm'.");
    document.getElementById("resultado").textContent = "Unidade inválida";
    return; // Interrompe a função
}
//--------------------------------------

//Converte a Altura no ponto1
// Obter a unidade da altura e converter
let unidadeA1 = document.getElementById('unidadeA1').value;
let alturaConvertida1 = 0;

if (unidadeA1 === 'km1') {
    alturaConvertida1 = H1 * 1000;
} else if (unidadeA1 === 'm1') {
    alturaConvertida1 = H1;
} else {
    console.error("Unidade A1 inválida. Utilize 'km' ou 'm'.");
    document.getElementById("resultado").textContent = "Unidade inválida";
    return; // Interrompe a função
}
//--------------------------------------

//Converte a Altura no ponto2
// Obter a unidade da altura e converter
let unidadeA2 = document.getElementById('unidadeA2').value;
let alturaConvertida2 = 0;

if (unidadeA2 === 'km2') {
    alturaConvertida2 = H2 * 1000;
} else if (unidadeA2 === 'm2') {
    alturaConvertida1 = H2;
} else {
    console.error("Unidade A2 inválida. Utilize 'km' ou 'm'.");
    document.getElementById("resultado").textContent = "Unidade inválida";
    return; // Interrompe a função
}
//----------------------------------

//Converte a Velocidade no ponto1
// Obter a unidade de velocidade e converter
let unidadeV1 = document.getElementById('unidadeV1').value;
let VelocidadeConvertida1 = 0;

if (unidadeV1 === 'kms1') {
    VelocidadeConvertida1 = V1 * 0.277778;
} else if (unidadeV1 === 'ms1') {
    VelocidadeConvertida1 = V1;
} else {
    console.error("Unidade V1 inválida. Utilize 'kms' ou 'ms'.");
    document.getElementById("resultado").textContent = "Unidade inválida";
    return; // Interrompe a função
}
//----------------------------------

//Converte a Velocidade no ponto1
// Obter a unidade de velocidade e converter
let unidadeV2 = document.getElementById('unidadeV2').value;
let VelocidadeConvertida2 = 0;

if (unidadeV2 === 'kms2') {
    VelocidadeConvertida2 = V2 * 0.277778;
} else if (unidadeV2 === 'ms2') {
    VelocidadeConvertida2 = V2;
} else {
    console.error("Unidade V2 inválida. Utilize 'kms' ou 'ms'.");
    document.getElementById("resultado").textContent = "Unidade inválida";
    return; // Interrompe a função
}

// Realizar os cálculos
let ladoEsquerdo = PressãoConvertida + (DensidadeConvertida * g * alturaConvertida1) + (DensidadeConvertida * VelocidadeConvertida1^2) / 2;
let ladoDireito = PressãoConvertida2 + (DensidadeConvertida * g * alturaConvertida2) + (DensidadeConvertida * VelocidadeConvertida2^2) / 2;
let ladoEsquerdoA = ladoEsquerdo.toFixed(4);
let ladoDireitoA = ladoDireito.toFixed(4);

// Exibir os resultados
document.getElementById("resultado").textContent = "Lado Esquerdo: " + ladoEsquerdoA;
document.getElementById("resultado2").textContent = "Lado Direito: " + ladoDireitoA;
document.getElementById("ADasd").textContent = "D convertida: " + PressãoConvertida ;

// Verificando a igualdade e exibindo o resultado no elemento
if (ladoEsquerdo === ladoDireito) {
    document.getElementById("resultadoB").textContent ="Está Balanceada";
} else {
    document.getElementById("resultadoB").textContent ="Não está Balanceada";
}
}

    // Verifica qual variável está faltando e isola-a na equação
    switch (variavelDesconhecida) {
      case 'P1':
        return P2 + ρ * g * (h2 - h1) + 0.5 * ρ * (v2**2 - v1**2);
        return "Variável desconhecida inválida";
    }
  
// Adicionar o event listener apenas uma vez
document.getElementById('unidadeA1').addEventListener('change', function() {
calcular();
});

// Chamar a função calcular() inicialmente
calcular();