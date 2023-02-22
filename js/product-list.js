(function(){

    const products = [
        {
            id: 1,
            name: 'Baby Yoda',
            price: 100,
            image: 'img/baby-yoda.svg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 2,
            name: 'Viking',
            price: 200,
            image: 'img/viking.svg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 3,
            name: 'Banana',
            price: 300,
            image: 'img/banana.svg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 4,
            name: 'Girl',
            price: 400,
            image: 'img/girl.svg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        }
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.main-products__list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <article class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-card__h3">${product.name}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__buttons">
              <button class="product-card__buttons-info button button-card">
                Info
              </button>
              <button class="product-card__buttons-buy button button-card">
                Buy - ${product.price}
              </button>
            </div>
          </article>`;
        }
    }

    renderProducts(products);

})();