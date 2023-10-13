import Product from './Product.js';

const availableProducts = [];
const removedProducts = [];
const availableProductListElement = document.getElementById('availableProductList');
const removedProductListElement = document.getElementById('removedProductList');
const addProductButton = document.getElementById('addProduct');
const removeProductButton = document.getElementById('removeProductButton');
const productIdInput = document.getElementById('productIdInput');
const quantityToRemoveInput = document.getElementById('quantityToRemoveInput');

function addProduct() {
    const id = availableProducts.length + 1;
    const quantity = Math.floor(Math.random() * 100) + 1;
    const price = (Math.random() * 100).toFixed(2);

    const product = new Product(id, quantity, price);
    availableProducts.push(product);

    displayProducts();
}

function displayProducts() {
    availableProductListElement.innerHTML = '';
    removedProductListElement.innerHTML = '';

    availableProducts.forEach((product) => {
        const productItem = document.createElement('li');
        productItem.textContent = `Producto ${product.id} - Cantidad: ${product.quantity}, Precio: $${product.price}`;
        availableProductListElement.appendChild(productItem);
    });

    removedProducts.forEach((product) => {
        const productItem = document.createElement('li');
        productItem.textContent = `Producto ${product.id} - Cantidad: ${product.quantity}, Precio: $${product.price}`;
        removedProductListElement.appendChild(productItem);
    });
}

function removeProduct() {
    const productId = productIdInput.value;
    const quantityToRemove = parseInt(quantityToRemoveInput.value);

    const product = availableProducts.find((p) => p.id === parseInt(productId));

    if (product) {
        if (quantityToRemove > 0 && quantityToRemove <= product.quantity) {
            product.quantity -= quantityToRemove;
            if (product.quantity === 0) {
                availableProducts.splice(availableProducts.indexOf(product), 1);
                removedProducts.push(product);
            }
            displayProducts();
            displayMessage(`Producto ${product.id} - ${quantityToRemove} unidades eliminadas`);
        } else {
            displayMessage('Cantidad no válida');
        }
    } else {
        displayMessage('Producto no encontrado');
    }
}

function displayMessage(message) {
    const messageArea = document.getElementById('messageArea');
    messageArea.textContent = message;
}

addProductButton.addEventListener('click', addProduct);
removeProductButton.addEventListener('click', removeProduct);
