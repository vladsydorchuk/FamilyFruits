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
                </div>
            </div>
        `;

    productsTable.insertAdjacentHTML("beforeend", item);
});