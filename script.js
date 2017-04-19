var totalBill=0;
var groceryList=[
{
  name: 'milk',
  price: 3.59
},
{
  name: 'spinach',
  price: 2.00
},
{
  name: 'bananas',
  price: 1.50
},
{
  name: 'eggs',
  price: 3.00
},
{
  name: 'cheese',
  price: 4.69
},
{
  name: 'oranges',
  price: 2.19
},
{
  name: 'chicken',
  price: 7.45
},
{
  name: 'pistacios',
  price: 1.10
},
{
  name: 'oatmeal',
  price: 2.37
},
{
  name: 'water',
  price: 4.79
},
{
  name: 'chocolate',
  price: 5.59
}
]
groceryList.forEach(function(item){
  console.log(item.name, item.price);
  totalBill+=item.price;

}); console.log("Your subtotal is: $" + totalBill.toFixed(2));
var salesTax=totalBill*0.06;
var finalBill=salesTax+totalBill;
console.log("Your sales tax is: $" + salesTax.toFixed(2) + ".");
console.log("Your total bill is: $" + finalBill.toFixed(2) + ".");
