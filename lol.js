localStorage.setItem("username", 
"john");
const username = 
localStorage.getItem("username");
console.log(username);























let cart = [];

let packages = [
 {name: "650 RP", price: 5},
 {name: "1380 RP", price: 10},
 {name: "2800 RP", price: 20},
 {name: "5000 RP", price: 35}
];

let buttons = document.querySelectorAll(".package button");

buttons[0].onclick = function() { addToCart(0); }
buttons[1].onclick = function() { addToCart(1); }
buttons[2].onclick = function() { addToCart(2); }
buttons[3].onclick = function() { addToCart(3); }

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

