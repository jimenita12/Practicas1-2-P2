export default class MostrarNumeros {
    static displayNumbers(numeros, elementId) {
        const list = document.getElementById(elementId);
        list.innerHTML = '';

        const comas = numeros.join(", ");
        
        const listItem = document.createElement('li');
        listItem.textContent = comas;
        list.appendChild(listItem);
    }
}