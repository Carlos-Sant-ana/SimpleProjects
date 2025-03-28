function calcularConstanteBernoulli(p, rho, V, g, h) {
    const constante = p + 0.5 * rho * Math.pow(V, 2) + rho * g * h;
    return constante;
}

function calcularEExibirConstante() {
    const pressao = parseFloat(document.getElementById("pressao").value);
    const densidade = parseFloat(document.getElementById("densidade").value);
    const velocidade = parseFloat(document.getElementById("velocidade").value);
    const gravidade = parseFloat(document.getElementById("gravidade").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const constanteBernoulli = calcularConstanteBernoulli(pressao, densidade, velocidade, gravidade, altura);

    document.getElementById("resultado").textContent = "A constante de Bernoulli é: " + constanteBernoulli;
}

function calcularPressao(constante, rho, V, g, h) {
    const p = constante - 0.5 * rho * Math.pow(V, 2) - rho * g * h;
    return p;
}

function calcularEExibirPressao() {
    const constante = parseFloat(document.getElementById("constante").value);
    const densidade = parseFloat(document.getElementById("densidade").value);
    const velocidade = parseFloat(document.getElementById("velocidade").value);
    const gravidade = parseFloat(document.getElementById("gravidade").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const pressao = calcularPressao(constante, densidade, velocidade, gravidade, altura);

    
    document.getElementById("resultado2").textContent += "p = " + pressao;
}

function calcularDensidade(constante, p, V, g, h) {
    const rho = (constante - p) / (0.5 * Math.pow(V, 2) + g * h);
    return rho;
}

function calcularEExibirDensidade() {
    const constante = parseFloat(document.getElementById("constante").value);
    const pressao = parseFloat(document.getElementById("pressao").value);
    const velocidade = parseFloat(document.getElementById("velocidade").value);
    const gravidade = parseFloat(document.getElementById("gravidade").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const densidade = calcularDensidade(constante, pressao, velocidade, gravidade, altura);

    document.getElementById("resultado3").textContent += "ρ = " + densidade;
}

function calcularVelocidade(constante, p, rho, g, h) {
    const V = Math.sqrt((2 * (constante - p - rho * g * h)) / rho);
    return V;
}

function calcularEExibirVelocidade() {
    const constante = parseFloat(document.getElementById("constante").value);
    const pressao = parseFloat(document.getElementById("pressao").value);
    const densidade = parseFloat(document.getElementById("densidade").value);
    const gravidade = parseFloat(document.getElementById("gravidade").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const velocidade = calcularVelocidade(constante, pressao, densidade, gravidade, altura);

    document.getElementById("resultado4").textContent += "V = " + velocidade;
}

function calcularAltura(constante, p, rho, V, g) {
    const h = (constante - p - 0.5 * rho * Math.pow(V, 2)) / (rho * g);
    return h;
}

function calcularEExibirAltura() {
    const constante = parseFloat(document.getElementById("constante").value);
    const pressao = parseFloat(document.getElementById("pressao").value);
    const densidade = parseFloat(document.getElementById("densidade").value);
    const velocidade = parseFloat(document.getElementById("velocidade").value);
    const gravidade = parseFloat(document.getElementById("gravidade").value);

    const altura = calcularAltura(constante, pressao, densidade, velocidade, gravidade);

    document.getElementById("resultado5").textContent += "h = " + altura;
}

function calcularGravidade(constante, p, rho, V, h) {
    const g = (constante - p - 0.5 * rho * Math.pow(V, 2)) / (rho * h);
    return g;
}

function calcularEExibirGravidade() {
    const constante = parseFloat(document.getElementById("constante").value);
    const pressao = parseFloat(document.getElementById("pressao").value);
    const densidade = parseFloat(document.getElementById("densidade").value);
    const velocidade = parseFloat(document.getElementById("velocidade").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const gravidade = calcularGravidade(constante, pressao, densidade, velocidade, altura);

    document.getElementById("resultado6").textContent += "g = " + gravidade;
}