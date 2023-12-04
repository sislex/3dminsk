// отображение товаров выбранной категории
const radioButtons = document.querySelectorAll('input[name="btnradio"]');
const products = document.querySelectorAll('.product');
radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedSort = button.getAttribute('data-sort');
    if (selectedSort === 'all') {
      products.forEach((product) => {
        product.style.display = 'block';
      });
    } else {
      products.forEach((product) => {
        if (product.getAttribute('data-type') === selectedSort) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  });
});
// при переходе на страницу открываются элементы all
window.onload = function() {
  const namesA = document.querySelectorAll('.names');
  namesA.forEach((names) => {
    if (names.getAttribute('data-type') === 'all') {
      names.style.display = 'block';
    } else {
      names.style.display = 'none';
    }
  });
}
// Отображение названия категории.
const namesA = document.querySelectorAll('.names');
radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedSort = button.getAttribute('data-sort');
    namesA.forEach((names) => {
      if (names.getAttribute('data-type') === selectedSort) {
        names.style.display = 'block';
      } else {
        names.style.display = 'none';
      }
    });
  });
});

//Создание массива с перечнем товаров
let productsl = [
  {
      id: 1,
      img: 'img/3.jpg',
      config: 'Это товар номер 1, и мы его описали!',
      name: 'Товар 1',
      prise: '5 BYN',
      quantity: 10
  },
  {
      id: 2,
      img: 'img/2.jpg',
      config: 'Это товар номер 2, и мы его описали!',
      name: 'Товар 2',
      prise: '180 BYN',
      quantity: 5
  },
  {
      id: 3,
      img: 'img/4.jpg',
      config: 'Это товар номер 3, и мы его описали!',
      name: 'Товар 3',
      prise: '399999 BYN',
      quantity: 7
  }
];
//Шаблон
let div = document.getElementById('productsl');
let pElements = [];
productsl.forEach(product => {
  let p = document.createElement('p');
  p.innerHTML = `<div class="card mt-3">
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
</div>`;})
/*
let goods = '';
productsl.forEach(product => {
  let tpl = `<div>${product.prise}</div>`;
  goods += tpl; 
});
div.innerHTML = goods;
*/
pElements.forEach(p => {
  div.appendChild(p);
});
