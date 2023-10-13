import GeneradorNumeros from './GeneradorNumeros.js';
import ImparPar from './ImparPar.js';
import MostrarNumeros from './MostrarNumeros.js';

document.getElementById("generarNumeros").addEventListener("click", () => {
    const generarNumeros = GeneradorNumeros.generadorNumeros(10);

    MostrarNumeros.displayNumbers(generarNumeros, "todosLosNumeros");
    const { numerosPares, numerosImpares } = ImparPar.filtroImparPar(generarNumeros);
    
    MostrarNumeros.displayNumbers(numerosPares, "numerosPares");
    MostrarNumeros.displayNumbers(numerosImpares, "numerosImpares");
});
