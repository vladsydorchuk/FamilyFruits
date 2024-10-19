console.log(fruits);

const productsTable = document.querySelector("#products__list");
console.log(productsTable.innerHTML);

fruits
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(x => {
        var item = `
            <div class="products__card">
                <div class="product-img-container" style="background-image: url('img/fruits/${x.code}.jpg');">
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

// MENU

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

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


