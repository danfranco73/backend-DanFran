// En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello:
// Definir la clase Contador.
// Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
// Cada instancia inicia su cuenta individual en cero.
// La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por sus instancias, el cual también inicia en cero.
// Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
// Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
// Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
// Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general

class ContadorBanco {
    static cuentaGlobal = 0;

    constructor(responsable) {
        this.responsable = responsable;
        this.cuentaIndividual = 0;
    }
    //Metodos
    obtenerResponsable() {
        return this.responsable;
    }
    obtenerCuentaIndividual() {
        return this.cuentaIndividual;
    }

    obtenerCuentaGlobal() {
        return ContadorBanco.cuentaGlobal;
    }

    contar() {
        this.cuentaIndividual++;
        ContadorBanco.cuentaGlobal++;
    }
}

const r1 = new ContadorBanco("Juan");
const r2 = new ContadorBanco("Seba");

r1.contar();
r2.contar();

console.log(r1.obtenerCuentaIndividual());
console.log(r2.obtenerCuentaIndividual());

console.log(r2.obtenerCuentaGlobal());
