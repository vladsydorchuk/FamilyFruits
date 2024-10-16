console.log(fruits);

const productsTable = document.querySelector("#products__list");
console.log(productsTable.innerHTML);

fruits.forEach(x => {
    var item = `
        <div class="products__card">
            <div class="product-img-container" style="background-image: url('img/fruits/${x.code}.jpg');">
                </div>
            <div class="product-body">
                <div class="product-body-top">
                    <p class="product-title">${x.name}</p>
                    <p class="product-availiable ${x.available ? 'in-stock' : 'out-stock'}">${x.available ? 'В наявності' : 'Немає в наявності'}</p>
                </div>
                <div class="product-body-bottom">
                    <p class="product-price">${x.price} ₴</p>
                    <p class="product-price-info">Ціна за ${x.pricePer}</p>
                    <p class="product-min-weight">мін. замовлення ${x.minOrder}</p>
                </div>
            </div>
        </div>
    `;

    productsTable.insertAdjacentHTML("beforeend", item);
});