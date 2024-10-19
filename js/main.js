const productsTable = document.querySelector("#products__list");

let sortedFruits = fruitsData.sort((a, b) => a.name.localeCompare(b.name));
let sortedVegetables = vegetablesData.sort((a, b) => a.name.localeCompare(b.name));

// MENU
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

let fruitsBtn = document.querySelector('#fruits-btn')
let vegetables = document.querySelector('#vegetables-btn')
let green = document.querySelector('#green-btn')
let nuts = document.querySelector('#nuts-btn')
let honey = document.querySelector('#honey-btn')

fruitsBtn.addEventListener('click', function(){
    fillProductList(sortedFruits);
});

vegetables.addEventListener('click', function(){
    fillProductList(sortedVegetables);
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

menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})



function fillProductList(items) {
    productsTable.innerHTML = '';

    items
        .forEach(x => {
            var item = `
                <div class="products__card">
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