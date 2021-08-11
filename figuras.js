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

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    document.getElementById("resultadoPerimetroTriangulo").innerHTML="El perimetro es " + perimetro;
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo3");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo4");
    const value2 = Number(input2.value);
    const area = areaTriangulo(value1,value2);
    document.getElementById("resultadoAreaTriangulo").innerHTML="El área es " + area;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    document.getElementById("resultadoPerimetroCirculo").innerHTML="El perimetro es " + perimetro;
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    document.getElementById("resultadoAreaCirculo").innerHTML="El área es " + area;
}

