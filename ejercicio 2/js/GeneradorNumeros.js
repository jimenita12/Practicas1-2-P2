export default class GeneradorNumeros{
    static generadorNumeros(contador){
        const numeros = [];
        for (let i =0; i < contador; i++){
            numeros.push(Math.floor(Math.random() * 100) +1);
        }
        return numeros;
    }
}
