let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDatatoHTML =() => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="Des">
                <span>Nike</span>
                <h5> ${product.name}</h5>
               <h4>$${product.price}</h4>
            </div>
            <button class="addCart">
                Add To Cart
            </button>
                `;
            listProductHTML.appendChild(newProduct);
        })
    }
}
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        alert('1');
    }
})
const initApp = () => {
    // get data from Jason
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDatatoHTML();
    })
}
initApp();

