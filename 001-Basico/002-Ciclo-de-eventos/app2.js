console.log("Inicio del programa"); // 1

setTimeout(() => {
    console.log("Primer Timeout"); // 5
}, 3000);

setTimeout(() => {
    console.log("Segundo Timeout"); // 3
}, 0);

setTimeout(() => {
    console.log("Tercer Timeout"); // 4
}, 0);

console.log("Fin del programa"); // 2

//Los setTimeout son funciones NO BLOQUEANTES.

/*
*LLega a la pila de procesos y se ejecuta.
console.log("Inicio del programa"); 

*LLega a la pila de procesos y lo manda a la pila de node(apis).
*Cuando pasen 3 segundos lo manda a la cola de callbacks.
!Hasta que no este la pila de procesos(Call Stack) finalizada no se ejecuta.
*Se van ejecutando en fila de llegada
setTimeout(() => {
    console.log("Primer Timeout"); // 5
}, 3000);

*LLega a la pila de procesos y lo manda a la pila de node(apis).
*Cuando pasen 0 segundos lo manda a la cola de callbacks.
!Hasta que no este la pila de procesos(Call Stack) finalizada no se ejecuta.
*Se van ejecutando en fila de llegada
setTimeout(() => {
    console.log("Segundo Timeout"); // 3
}, 0);

*LLega a la pila de procesos y lo manda a la pila de node(apis).
*Cuando pasen 0 segundos lo manda a la cola de callbacks.
!Hasta que no este la pila de procesos(Call Stack) finalizada no se ejecuta.
*Se van ejecutando en fila de llegada
setTimeout(() => {
    console.log("Tercer Timeout"); // 4
}, 0);

*LLega a la pila de procesos y se ejecuta.
console.log("Fin del programa"); // 2
*/