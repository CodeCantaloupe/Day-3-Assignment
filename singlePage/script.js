let pid = new URLSearchParams(location.search);
let container = document.querySelector(".container");

let getData = async () => {
    await fetch(`https://dummyjson.com/products/${pid.get("id")}`)
    .then((response) => response.json())
    .then((product) => {
        console.log(product);
        container.innerHTML = `
            <div class="product-page">
                <!-- Left Side: Image Gallery -->
                <div class="product-image-gallery">
                    <img src="${product.thumbnail}" alt="Main Product Image" class="main-image">
                    <div class="thumbnail-gallery">
                        <img src="${product.images[0]}" alt="Thumbnail 1">
                    </div>
                </div>

                <!-- Right Side: Product Details -->
                <div class="product-details">
                    <h2>${product.title}</h2>
                    <div>
                        <p style="display:inline;  text-decoration: line-through">
                        ${Math.floor(product.price * 1.2)}
                        </p>
                        <p style="display:inline; font-weight:500; font-size: 20px">
                        ${product.price} EGP
                        </p>
                    </div>
                    <p class="availability">Available - ${product.stock}</p>

                    <!-- Color options -->
                    <div class="color-options">
                        <span>Choose Color</span>
                        <div class="color-choices">
                            <span class="color-circle" style="background-color: #A7E0DA;"></span>
                            <span class="color-circle" style="background-color: #E8C85F;"></span>
                            <span class="color-circle" style="background-color: #734E39;"></span>
                            <span class="color-circle" style="background-color: #000000;"></span>
                        </div>
                    </div>

                    <!-- Size and Cart -->
                    <button class="size-button">Size</button>
                    <button class="cart-button">Add to Cart</button>

                    <!-- Description -->
                    <div class="product-description">
                        <h3>Description</h3>
                        <p>${product.description}</p>
                    </div>

                    <!-- Social Media Links -->
                    <div class="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>

    `;
    });
};

getData();