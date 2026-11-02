// vehiculo.js
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detallesBase() {
        return `${this.marca} ${this.modelo}`;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, puertas) {
        // ERROR: Se omite super(marca, modelo). 
        // Node.js lanzará un ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.puertas = puertas; 
    }

    mostrarCoche() {
        return `${this.detallesBase()} con ${this.puertas} puertas.`;
    }
}

const miCoche = new Coche("Toyota", "Corolla", 4);
console.log(miCoche.mostrarCoche());