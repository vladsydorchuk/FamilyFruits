const productsTable = document.querySelector("#products__list");

let sortedFruits = fruitsData.sort((a, b) => a.name.localeCompare(b.name));
let sortedVegetables = vegetablesData.sort((a, b) => a.name.localeCompare(b.name));

// let mainProductList = sortedFruits
//     .concat(sortedVegetables)
//     .filter(x => x.id == 2 || x.id == 5);

// function OnLoadMainPage() {
//     console.log(mainProductList);
//     fillProductList(mainProductList);
// }

// OnLoadMainPage();



// localStorage['selectedProducts'] = JSON.stringify(sortedFruits);

// let d = JSON.parse(localStorage['selectedProducts']);

// console.log(d);


// MENU
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

let fruitsBtn = document.querySelector('#fruits-btn')
let vegetables = document.querySelector('#vegetables-btn')
let green = document.querySelector('#green-btn')
let nuts = document.querySelector('#nuts-btn')
let honey = document.querySelector('#honey-btn')

let basketView = document.querySelector('.basket__container');
let basketBtn = document.querySelector('#basketBtn')

let productViewCard = document.querySelector('.product__view');

// fillProductList(sortedFruits, false);

fruitsBtn.addEventListener('click', function(){
    fillProductList(sortedFruits, false);
});

vegetables.addEventListener('click', function(){
    fillProductList(sortedVegetables, false);
});

green.addEventListener('click', function(){
    console.log('green');
});

nuts.addEventListener('click', function(){
    console.log('nuts');
});

honey.addEventListener('click', function(){
    console.log('honey');
});

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

basketBtn.addEventListener('click', function() {
    fillProductList([], true); // Clear list
    basketView.classList.toggle('hide');
});

menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})



function fillProductList(items, hideList) {
    if (hideList){
        productsTable.classList.add('hide');
    } else {
        productsTable.classList.remove('hide');
        basketView.classList.add('hide');
    }
    
    productsTable.innerHTML = '';

    items
        .forEach(x => {
            var item = `
                <div class="products__card" onclick="productClick()" productCategory="${x.category}" productId="${x.id}">
                    <div class="product-img-container" style="background-image: url('img/${x.category}/${x.code}.jpg');">
                    </div>
                    <div class="product-body">
                        <p class="product-title">${x.name}</p>
                        <p class="product-available ${x.available ? "in-stock" : "out-stock"}">
                            ${x.available ? "В наявності" : "Немає в наявності"}
                        </p>
                        <p class="product-min-order">Мін. замовлення ${x.minOrder}</p>
                    </div>
                </div>
            `;

        productsTable.insertAdjacentHTML("beforeend", item);
    });
}

function productClick(){ 
    let clickedElement = this.event.currentTarget;
    let rootElement = clickedElement.closest('.products__card');

    let productCategory = rootElement.getAttribute("productCategory");
    let productId = rootElement.getAttribute("productId");

    let x = null;
    switch (productCategory) {
        case 'fruits':
            x = fruitsData.find(x => x.id == productId);
            break;
        case 'vegetables':
            x = vegetablesData.find(x => x.id == productId);
            break;
    }

    let itemHtml = `
        <div class="product__view-container">
            <div class="product__view-img" style="background-image: url('img/${x.category}/${x.code}.jpg');"></div>
            <p class="product__view-title product-title">${x.name}</p>
            <p class="product__view-min-weight">Мінімальне замовлення ${x.minOrder}</p>
            <p class="product__view-available ${x.available ? "hide" : "red-text"}">
                ${x.available ? "" : "Немає в наявності"}
            </p>
            <input class="product__view-weight-value ${x.available ? "" : "hide"}" type="number" min="${x.minOrder.split(' ')[0]}" placeholder="Введіть кількість...">
            <div class="product__view-buttons">
                <button id="product__view-addBtn" 
                    onclick="addProductToBasketBtn()" 
                    class="${x.available ? "" : "hide"}">
                </button>
                <button id="product__view-closeBtn" onclick="closeProductViewPopup()"></button>
            </div>
        </div>
    `;

    productViewCard.innerHTML = '';
    productViewCard.insertAdjacentHTML("beforeend", itemHtml);
    productViewCard.classList.toggle('hide');
}

function addProductToBasketBtn() {
    let clickedElement = this.event.currentTarget;
    let rootElement = clickedElement.closest('.product__view-container');

    let weight = rootElement.querySelector('.product__view-weight-value');
    let minWeight = weight.getAttribute('min');

    if (minWeight > weight.value) {
        let minOrder = rootElement.querySelector('.product__view-min-weight');
        minOrder.classList.add('red-text');

        return;
    }

    console.log(weight.value >= minWeight ? 'ok' : '!ok');

    console.log('product added');
    productViewCard.classList.toggle('hide');
}

function closeProductViewPopup() {
    productViewCard.classList.toggle('hide');
}