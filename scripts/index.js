let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"

 async function getFoodData(url){
    try{
        let res=await fetch(url)
        let data=await res.json()
        console.log(data.meals)
        renderProducts(data.meals)

    }catch(error){
        console.log(error)
    }
}

getFoodData(url)
// api call end here

function renderProducts(foodItem){
    var menu=document.getElementById("menu")

   
    foodItem.map((item)=>{
        var foodCard=document.createElement("div")

        var img=document.createElement("img")
        img.src=item.strMealThumb

        var price=document.createElement("p")
        price.textContent=Math.round(Math.random()*500)

        var addTocartBtn=document.createElement("button")
        addTocartBtn.setAttribute("id","addtocart")
        addTocartBtn.textContent="Add To Cart"
        addTocartBtn.onclick=function (event){
           addedToCart(img.src,price.textContent)
        }

        foodCard.append(img,price,addTocartBtn)
        menu.append(foodCard)

    })


    
}

var CartArray=[]
function addedToCart(img,price){
    var obj={
        img:img,
        price:parseInt(price)
    }
    CartArray.push(obj)
    localStorage.setItem("cart",JSON.stringify(CartArray))
    cartCountShow(CartArray)
}

function cartCountShow(cart){
    var count=document.getElementById("count")
    count.textContent=cart.length;

}