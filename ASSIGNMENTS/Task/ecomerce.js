document.addEventListener('DOMContentLoaded', async function() {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            console.log("data",data);
            let response = await data.json()
            console.log("response",response);
            console.log(typeof(response));
            console.log("data",typeof(data));
            for (i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                products.innerHTML += `
                <div class="product">
                <div class = "main_section">
                <div class="product-img"><img src="${response[i].image}" alt="${response[i].category}"></div>
                <div class="product_title"><h2>${response[i].title}</h2></div>
                <div class="product_category"><h4>${response[i].category}</h4></div>
                </div>
            <div class="product_details">
                <div class="product_price"> <h3 >${response[i].price}</h3></div>
                <div class="product_rating"> <h4 >${response[i].rating.rate}</h4></div>
            </div>
            </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    await fetchProducts('https://fakestoreapi.com/products');
});




