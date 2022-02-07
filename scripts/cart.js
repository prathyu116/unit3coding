var totalShow = document.getElementById("total");

var cartItem = JSON.parse(localStorage.getItem("cart"));
showCart(cartItem)
console.log(cartItem);

var total = cartItem.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(total);

totalShow.textContent ="Total Amount:₹"+ total;

function showCart(cart) {
  var container = document.getElementById("cart");
  container.innerHTML=""
 cart.forEach((item,index)=>{
     var div=document.createElement("div")
    var img = document.createElement("img");
    img.src = item.img;

    var price=document.createElement("p")
    price.textContent=item.price

    var btn=document.createElement("button")
    btn.textContent="remove"
    btn.onclick=function (event){
        removeItem(index,price.textContent)
    }
   div.append(img,price,btn)
   container.append(div)

 })
}

function removeItem(index,price){
    totalShow.textContent = total-parseInt(price);
        cartItem.splice(index,1)
    // console.log(newArr)
    showCart(cartItem)


}