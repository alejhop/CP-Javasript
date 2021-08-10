//Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();

//Código del triangulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
console.groupEnd();


//Código del círculo
console.group("Triángulos");
//Diámetro
function diametroCirculo(radio){
    return radio * 2;
} 
//PI
const PI = Math.PI;
console.log("PI es " + PI);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
} 
console.groupEnd();


// Interacción
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("resultadoPerimetro").innerHTML="El perimetro es " + perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("resultadoArea").innerHTML="El área es " + area;
}
