var appleQuantity;
var applePriceTotal = 0;
var appleName = 'Apple Juice';
var applePrice = 5;

function addAppleJuice() {
  while(true){
  appleQuantity = parseInt(prompt("How many Apple juice would you wish to purchase?"));
  if (appleQuantity <= 0 || isNaN(appleQuantity)) {
    alert("Invalid entry, Please try again");
    appleQuantity = prompt("How many Apple juice would you wish to purchase?");
  } else {
    document.getElementById("apple").innerHTML = " x " + appleQuantity;
    applePriceTotal = applePrice * appleQuantity;
    if(appleQuantity >= 1)
    {
      var button = `<td id="U"><a id="i" href="#"><button onclick="checkout();">Checkout</button></a></td>`
      document.getElementById("popUp").innerHTML = button;
    }
    break;
    }  
  }
}



var orangeQuantity = 0;
let orangePrice = 6;
let orangePriceTotal = 0;
let orangeName = "Orange Juice";

function addOrangeJuice() {
while(true){
  orangeQuantity = parseInt(prompt("How many Orange juice would you wish to purchase?"));
  if (orangeQuantity <= 0 || isNaN(orangeQuantity)) {
    alert("Invalid entry, Please try again");
    orangeQuantity = prompt(
      "How many Orange juice would you wish to purchase?"
    );
  } else {
    document.getElementById("orange").innerHTML = " x " + orangeQuantity;
    orangePriceTotal = orangePrice * orangeQuantity;
    if(orangeQuantity >= 1)
    {
      var button = `<td id="U"><a id="i" href="#"><button onclick="checkout();">Checkout</button></a></td>`
      document.getElementById("popUp").innerHTML = button;
    }
      break;
    }  
  }
}


var mangoQuantity = 0;
let mangoPrice = 7;
let mangoPriceTotal = 0;
let mangoName = "Mango Juice";
function addMangoJuice() {
  while(true){
  mangoQuantity = parseInt(prompt("How many Mango juice would you wish to purchase?"));
  if (mangoQuantity <= 0 || isNaN(mangoQuantity)) {
    alert("Invalid entry, Please try again");
    mangoQuantity = prompt("How many Mango juice would you wish to purchase?");
  } else {
    document.getElementById("mango").innerHTML = " x " + mangoQuantity;
    mangoPriceTotal = mangoPrice * mangoQuantity;
    if(mangoQuantity >= 1)
    {
      var button = `<td id="U"><a id="i" href="#"><button onclick="checkout();">Checkout</button></a></td>`
      document.getElementById("popUp").innerHTML = button;
    }
    break;
  }
}
}

var grapeQuantity = 0;
let grapePrice = 8;
let grapePriceTotal = 0;
let grapeName = "Grape Juice";

function addGrapeJuice() {
  while(true){
  grapeQuantity = parseInt(prompt("How many Grape juice would you wish to purchase?"));
  if (grapeQuantity <= 0 || isNaN(grapeQuantity)) {
    alert("Invalid entry, Please try again");
    grapeQuantity = prompt("How many Grape juice would you wish to purchase?");
  } else {
    document.getElementById("grape").innerHTML = " x " + grapeQuantity;
    grapePriceTotal = grapePrice * grapeQuantity;
    if(grapeQuantity >= 1)
    {
      var button = `<td id="U"><a id="i" href="#"><button onclick="checkout();">Checkout</button></a></td>`
      document.getElementById("popUp").innerHTML = button;
    }
    break;
  }
}
}

var passionFruitQuantity = 0;
let passionFruitPrice = 9;
let passionFruitPriceTotal = 0;
let passionFruitName = "Passionfrruit Juice";

function addPassionFruitJuice() {
  while(true){
  passionFruitQuantity = parseInt(prompt("How many Passionfruit juice would you wish to purchase?"));
  if (passionFruitQuantity <= 0 || isNaN(passionFruitQuantity)) {
    alert("Invalid entry, Please try again");
    orangeQuantity = prompt(
      "How many Passionfruit juice would you wish to purchase?"
    );
  } else {
    document.getElementById("passionfruit").innerHTML = " x " + passionFruitQuantity;
    passionFruitPriceTotal = passionFruitPrice * passionFruitQuantity;
    if(passionFruitQuantity >= 1)
    {
      var button = `<td id="U"><a id="i" href="#"><button onclick="checkout();">Checkout</button></a></td>`
      document.getElementById("popUp").innerHTML = button;
    }
    break;
  }
}
}

function checkout() {

    let customerName = "";

  customerName = prompt("Please enter your name:");
  while (true) {
    if (customerName === "") {
      alert("You didn't enter a name.");
      customerName = prompt("Please enter your name.");
    } else {
      break;
    }
  }
  customer = "Cutomer Name: " + customerName.toUpperCase();
  document.getElementById("name").innerHTML = customer;


  let table = '<table border ="1" width ="40%" align="center">';
  if (appleQuantity > 0)
  {
    table += `<tr><td>${appleName}</td><td>${appleQuantity}</td><td>$${applePriceTotal.toFixed(2)}</td></tr>`;
  }
  if (orangeQuantity > 0)
  {
    table += `<tr><td>${orangeName}</td><td>${orangeQuantity}</td><td>$${orangePriceTotal.toFixed(2)}</td></tr>`;
  }
  if (mangoQuantity > 0)
  {
    table += `<tr><td>${mangoName}</td><td>${mangoQuantity}</td><td>$${mangoPriceTotal.toFixed(2)}</td></tr>`;
  }
  if (grapeQuantity > 0)
  {
    table += `<tr><td>${grapeName}</td><td>${grapeQuantity}</td><td>$${grapePriceTotal.toFixed(2)}</td></tr>`;
  }
  if (passionFruitQuantity > 0)
  {
    table += `<tr><td>${passionFruitName}</td><td>${passionFruitQuantity}</td><td>$${passionFruitPriceTotal.toFixed(2)}</td></tr>`;
  }

  var totalPrice = applePriceTotal + orangePriceTotal + mangoPriceTotal + grapePriceTotal + passionFruitPriceTotal;
  var tax = totalPrice * 0.13;
  var finalTotal = tax + totalPrice;

  table += `<tr><td colspan ="2" >GST 13%</td><td>$${tax.toFixed(2)}</td></tr>`;
  table += `<tr><td colspan ="2" >Total</td><td>$${finalTotal.toFixed(2)}</td></tr>`;

  table += `</table>`;
  document.getElementById("Juice").innerHTML = table;
}
