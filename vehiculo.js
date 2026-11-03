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
        super(marca, modelo); 
        this.puertas = puertas; 
    }

    mostrarCoche() {
        return `${this.detallesBase()} con ${this.puertas} puertas.`;
    }
}

const miCoche = new Coche("Toyota", "Corolla", 4);
console.log(miCoche.mostrarCoche());