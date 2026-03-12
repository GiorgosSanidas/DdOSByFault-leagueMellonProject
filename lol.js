let cart = [];

let packages = [
 {name: "650 RP", price: 5},
 {name: "1380 RP", price: 10},
 {name: "2800 RP", price: 20},
 {name: "5000 RP", price: 35},
    {name: "10000 RP", price:50}
];

let cartContainer = document.querySelector(".list");

for (let i=0; i<packages.length; i++){
    let pc = document.createElement("li");
    pc.innerHTML = `${packages[i].name} - ${packages[i].price} $`;
    let btn = document.createElement("button");
    btn.innerHTML = "BUY";
    pc.appendChild(btn);
    cartContainer.appendChild(pc);
}

//hold all buttons so as to add event listeners
let buttons = document.querySelectorAll(".list button");

//add click listener to every button
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click",()=>addToCart(i));
}

//append whole li to cart
function addToCart(index) {
    cart.push(packages[index]);
 updateCart();
}

function updateCart() {

 let list = document.getElementById("cartItems");
 list.innerHTML = "";

 let total = 0;

 for (let i = 0; i < cart.length; i++) {

   let li = document.createElement("li");
   li.textContent = cart[i].name + " - " + cart[i].price + "€";

   list.appendChild(li);

   total = total + cart[i].price;
 }

 document.getElementById("totalPrice").textContent =
 "Συνολική τιμή: " + total + " ευρώ";
}

function clearCart() {

 cart = [];
 updateCart();

}

function checkout() {
  if (cart.length !== 0) {
   window.location.href = "purchasecompleted.html";
  } else {
   return ;
  }
}