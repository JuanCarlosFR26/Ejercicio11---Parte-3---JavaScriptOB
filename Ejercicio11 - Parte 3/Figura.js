class Figura {
    constructor(radio, color, base, altura) {
        this.radio = radio;
        this.color = color;
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        if(this.base === undefined || this.altura === undefined) {
            return -1;
        } 
        return;
    }
}

class Circulo extends Figura {
    constructor(radio, color) {
        super(radio, color);
    }

    calcularArea() {
        return 2 * 3.14 * this.radio;
    }
}

const circulo = new Circulo(10, "Rojo");

console.log(circulo);

class Rectangulo extends Figura {
    constructor(base, altura, color) {
        super(base, altura, color);
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

const rectangulo = new Rectangulo(10, 20, "Verde");
console.log(rectangulo);

const figura = new Figura();

console.log(figura.calcularArea());
console.log(circulo.calcularArea());
console.log(rectangulo.calcularArea());