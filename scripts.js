const list = document.querySelector("ul");
let myLi = "";
let myDiscounts = "";
let myLiVegan = "";

const showBurg = menuOptions.forEach((product) => {
  myLi =
    myLi +
    `
   <li>
        <img class="img-card" src="${product.src}" alt="">
          <span class="value-5">
            <p>${product.name}</p>
            <h2>R$ ${product.price}</h2>
          </span>
        <img class="add" id="${product.name}" src="./img/add.svg" alt="">
    </li>
  `;
});

function showBurgs(params) {
  list.innerHTML = myLi;
}

list.innerHTML = myLi;


// Soma dos valores dos lanches no array (products.js)
const sum = menuOptions.reduce((values, atual) => {
  return (soma = values + atual.price);
}, 0);

// Formatacao do numero, para ficar com no maximo dois numero apos a virgula
let numeroFormatado = sum.toFixed(2);

// Mudando o HTML do <p> que contem o valor Total, a esquerda do menu.
const cartvalue = document.querySelector(".cart-value");
function totalValue() {
  cartvalue.innerHTML = `
        <p>TOTAL:</p>
        <p class="valor">R$${numeroFormatado}</p>
  `;
}

  for (let value of menuOptions) {
    value.price -= value.price * 0.2; // Aplica o desconto de 20%
    value.price = parseFloat(value.price.toFixed(2)); // Formata o preço para duas casas decimais
  }

const veganArray = menuOptions.filter((menu) => menu.vegan === true)

const veganFormat = veganArray.forEach((product) => {
  myLiVegan =
    myLiVegan +
  `
  <li>
    <img class="img-card" src="${product.src}" alt="">
     <span class="value-5">
        <p>${product.name}</p>
        <h2>R$ ${product.price}</h2>
     </span>
    <img class="add" id="${product.name}" src="./img/add.svg" alt="">
  </li>
  `;
});

console.log(myLiVegan)

function veganize() {
  list.innerHTML = myLiVegan
}


const discounted = menuOptions.forEach((product) => {
  myDiscounts =
    myDiscounts +
  `
  <li>
    <img class="img-card" src="${product.src}" alt="">
     <span class="value-5">
        <p>${product.name}</p>
        <h2>R$ ${product.price}</h2>
     </span>
    <img class="add" id="${product.name}" src="./img/add.svg" alt="">
  </li>
  `;
});

function discount() {
  list.innerHTML = myDiscounts
}

console.log(menuOptions)



