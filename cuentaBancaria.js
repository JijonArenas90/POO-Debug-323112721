// cuentaBancaria.js
class CuentaBancaria {
    #saldo = 1500; // Propiedad privada

    constructor(titular) {
        this.titular = titular;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria("Carlos");

// ERROR: Intentar acceder directamente a una propiedad privada desde fuera de la clase.
// Node.js lanzará un SyntaxError: Private field '#saldo' must be declared in an enclosing class
console.log("Saldo desde el exterior:", cuenta.#saldo);