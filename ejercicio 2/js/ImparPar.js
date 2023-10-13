export default class ImparPar{
    static filtroImparPar(numeros){
        const numerosPares = numeros.filter(numero => numero % 2 === 0);
        const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
        
        return {numerosPares, numerosImpares};
    }
}