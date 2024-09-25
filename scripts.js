const list = document.querySelector("ul");
let myLi = ''

menuOptions.forEach((product) => {
  myLi = myLi + 
  `
   <li>
        <img class="img-card" src="${product.src}" alt="">
          <span class="value-5">
            <p>${product.name}</p>
            <h2>R$ ${product.price}</h2>
          </span>
        <img class="add" src="./img/add.svg" alt="">
    </li>
  `
})

list.innerHTML = myLi
console.log(myLi)
