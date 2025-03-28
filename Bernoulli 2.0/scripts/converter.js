function converterPa() {
    let valor = parseFloat(document.getElementById("valor").value);
    let unidade = document.getElementById("unidade").value;
    let resultado = 0;
    switch (unidade) {
        case "atm":
            resultado = valor * 101325;
            break;
        case "bar":
            resultado = valor * 100000;
            break;
        case "mmhg":
            resultado = valor * 133.322;
            break;
        case "psi":
            resultado = valor * 6894.76;
            break;
    }
    document.getElementById("resultadoPa").innerHTML = valor + " " + unidade + " = " + resultado.toFixed(2) + " Pa";
}

function converterKg() {
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let unidade2 = document.getElementById("unidade2").value;
    let resultado2 = 0;
    switch (unidade2) {
        case "g/cm3":
            resultado2 = valor2 * 1000;
            break;
        case "g/mL":
            resultado2 = valor2 * 1000;
            break;
        case "lb/ft3":
            resultado2 = valor2 * 16.0185;
            break;
    }
    document.getElementById("resultadoKg").innerHTML = valor2 + " " + unidade2 + " = " + resultado2.toFixed(2) + " kg/m³";
}

function converter3() {
    let valor3 = parseFloat(document.getElementById("valor3").value);
    let unidade3 = document.getElementById("unidade3").value;
    let resultado3 = 0;
    switch (unidade3) {
        case "km/h":
            resultado3 = valor3 / 3.6;
            break;
        case "mph":
            resultado3 = valor3 * 0.44704;
            break;
        case "nós":
            resultado3 = valor3 * 0.514444;
            break;
    }
    document.getElementById("resultado3").innerHTML = valor3 + " " + unidade3 + " = " + resultado3.toFixed(2) + " m/s";
}

function converterAltura() {
    let altura = parseFloat(document.getElementById("altura").value);
    let unidadeAltura = document.getElementById("unidadeAltura").value;
    let resultado = 0;

    switch (unidadeAltura) {
        case "cm":
            resultado = altura / 100;
            break;
        case "mm":
            resultado = altura / 1000;
            break;
        case "in":
            resultado = altura * 0.0254;
            break;
        case "ft":
            resultado = altura * 0.3048;
            break;
    }

    document.getElementById("resultadoAltura").innerHTML = altura + " " + unidadeAltura + " = " + resultado.toFixed(2) + " m";
}