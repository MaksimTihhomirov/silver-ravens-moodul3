const products = [
    {
        id: "tshirt",
        name: "SILVER RAVENS T-SHIRT",
        price: 29.99,
        image: "SILVER-RAVENS-TSHIRT-BLACK-FRONT.png"
    },
    {
        id: "hoodie",
        name: "SILVER RAVENS HOODIE",
        price: 49.99,
        image: "SILVER-RAVENS-HOODIE-FRONT.png"
    },
    {
        id: "cap",
        name: "SILVER RAVENS CAP",
        price: 22.99,
        image: "SILVER-RAVENS-CAP.png"
    },
    {
        id: "mug",
        name: "SILVER RAVENS MUG",
        price: 9.99,
        image: "SILVER-RAVENS-MUG.png"
    },
    {
        id: "mousepad",
        name: "SILVER RAVENS MOUSEPAD",
        price: 19.99,
        image: "SILVER-RAVENS-MOUSEPAD.png"
    },
    {
        id: "mouse",
        name: "SILVER RAVENS MOUSE",
        price: 39.99,
        image: "SILVER-RAVENS-MOUSE.png"
    }
];

const featuredGrid = document.getElementById("featured-grid");
const prevButton = document.getElementById("prev-product");
const nextButton = document.getElementById("next-product");

let currentIndex = 0;

function showProducts() {

    featuredGrid.innerHTML = "";

    for (let i = 0; i < 3; i++) {

        const index = (currentIndex + i) % products.length;
        const product = products[index];

        featuredGrid.innerHTML += `
            <a href="product.html?id=${product.id}" class="product-card">

                <img src="assets/images/${product.image}"
                     alt="${product.name}">

                <h3>${product.name}</h3>

                <p class="product-price">
                    $${product.price.toFixed(2)}
                </p>

            </a>
        `;
    }
}

if (featuredGrid) {

    showProducts();

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % products.length;
        showProducts();
    });

    prevButton.addEventListener("click", function () {
        currentIndex =
            (currentIndex - 1 + products.length) % products.length;

        showProducts();
    });
}