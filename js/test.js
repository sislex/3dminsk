// 1. Массив с данными о 3-х товарах магазина

let products = [
    {
        id: 1,
        img: 'img/3.jpg',
        config: 'Это товар номер 1, и мы его описали!',
        name: 'Товар 1',
        prise: '5 BYN',
        quantity: 10,
        category: 'stock'
    },
    {
        id: 2,
        img: 'img/2.jpg',
        config: 'Это товар номер 2, и мы его описали!',
        name: 'Товар 2',
        prise: '180 BYN',
        quantity: 5,
        category: 'available'
    },
    {
        id: 2,
        img: 'img/2.jpg',
        config: 'Это товар номер 2, и мы его описали!',
        name: 'Товар 2',
        prise: '180 BYN',
        quantity: 5,
        category: 'available'
    },
    {
        id: 3,
        img: 'img/4.jpg',
        config: 'Это товар номер 3, и мы его описали!',
        name: 'Товар 3',
        prise: '399999 BYN',
        quantity: 7,
        category: 'plastic'
    }
  ];

// 2. Макет в который эти данные вставляются
function createProductTemplate(product) {
  return `<div class="card mt-3">
  <div class="row g-0">
      <div class="col-md-3">
          <img src="${product.img}" class="img-fluid rounded-start" alt="фото товара">
      </div>
      <div class="col-md-5 ">
          <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.config}</p>
          </div>
      </div>
      <div class="col-md-2 text-center border">
          <div class="card-body">
          <p class="card-title text-middle">${product.id}</p>
          </div>
      </div>
      <div class="col-md-2 text-center border">
          <div class="card-body">
          <p class="card-title">${product.prise}</p>
          </div>
      </div>
  </div>
</div>`;
}

// 3. Фильтр товаров по 3-м категориям по клику кнопки
function filterProducts(category) {
  return products.filter(product => product.category === category); // тут создается объект product который является отдельным продуктом фильтрации массива products
}

// 4. Функция объединяющая массив, макет и фильтр
function renderProducts(category) {
    let filteredProducts = category ? filterProducts(category) : products;
    let productTemplates = filteredProducts.map(createProductTemplate);
    return productTemplates.join('');
  }
  

// 5. Вывод данных в виде html разметки написанной в строку
document.getElementById('products').innerHTML = renderProducts();
