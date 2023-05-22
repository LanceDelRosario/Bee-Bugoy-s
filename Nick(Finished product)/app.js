let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

total.addEventListener("click", function(){
    document.location.href = 'Checkout.html';
});

let products = [
    {
        id: 1,
        name: 'Champagne',
        image: '1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'Ham',
        image: 'HAM BUY 1 TAKE 1.jpg',
        price: 900
    },
    {
        id: 3,
        name: 'Keror',
        image: 'KEROR.jpg',
        price: 2300
    },
    {
        id: 4,
        name: 'Lechon Roll',
        image: 'LECHON ROLL.jpg',
        price: 3000
    },
    {
        id: 5,
        name: 'Flower Fats',
        image: 'FLOWER FATS.jpg',
        price: 1000
    },
    {
        id: 6,
        name: 'Adobo Cut',
        image: 'ADOBO CUT.jpg',
        price: 900
    },
    {
        id: 7,
        name: 'Belly Lempo',
        image: 'BELLY LIEMPO.jpg',
        price: 2300
    },
    {
        id: 8,
        name: 'Beef Shank',
        image: 'BONELESS BEEF SHANK.jpg',
        price: 3000
    },
    {
        id: 9,
        name: 'Jowls',
        image: 'JOWLS.jpg',
        price: 1000
    },
    {
        id: 10,
        name: 'Kasim',
        image: 'KASIM.jpg',
        price: 1000
    },
    {
        id: 11,
        name: 'Pata Slice',
        image: 'PATA SLICE.jpg',
        price: 900
    },
    {
        id: 12,
        name: 'Pork Atay',
        image: 'PORK ATAY.jpg',
        price: 2300
    },
    {
        id: 13,
        name: 'Lechon Roll',
        image: 'LECHON ROLL.jpg',
        price: 3000
    },
    {
        id: 14,
        name: 'Pork Giniling',
        image: 'PORK GINILING.jpg',
        price: 1000
    },
    {
        id: 15,
        name: 'Riblets',
        image: 'RIBLETS.jpg',
        price: 1000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}