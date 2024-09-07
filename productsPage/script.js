var container = document.querySelector(".container");

let getData = async (url) => {
    await fetch(url)
    .then(respone => respone.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.products.length; i++) {
            const product = data.products[i];
            container.innerHTML += `
            <div class="product-container">
                <img src="${product.thumbnail}" alt="Product thumbnail" class="product-img">
                <div>
                    <p style="display:inline;  text-decoration: line-through">
                        ${Math.floor(product.price * 1.2)}
                    </p>
                    <p style="display:inline; font-weight:500; font-size: 20px">
                        ${product.price} EGP
                    </p>
                </div>
                <h2 class="product-title">${product.title}</h2>
                <p class="product-text">${product.description}</p>
                <a href="#">Know more ➝</a>
            </div>
            `;
        }
        
    })
    .catch(error => console.log(error))
}

getData("https://dummyjson.com/products");
