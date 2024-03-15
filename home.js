let cardContainer = document.getElementById("cards-container")
  let cartsContainer = document.getElementById("cart-items-container")
let cartContainer = document.getElementById("cart-conatiner")
  
let cartItemsArray = []

const productList = [
    {
      product_id: "1",
      name: "Library Stool Chair",
      image_url: "https://m.media-amazon.com/images/I/419fThxc2FL._SX425_.jpg",
      price: "$20",
      quantity: 1
    },
    {
      product_id: "2",
      name: "Library Stool Chair",
      image_url: "https://pelicanessentials.com/cdn/shop/files/two_seater_grey_0002.jpg?v=1699297524&width=1000",
      price: "$20",
      quantity: 1
    },
    {
      product_id: "3",
      name: "Library Stool Chair",
      image_url: "https://pelicanessentials.com/cdn/shop/products/golden-29_e61bf8b6-647b-423a-8b8e-47a5f5b939b4.jpg?v=1707207574&width=1000",
      price: "$20",
      quantity: 1
    },
    {
      product_id: "4",
      name: "Library Stool Chair",
      image_url: "https://pelicanessentials.com/cdn/shop/files/1seaterred.jpg?v=1694521319&width=1000",
      price: "$20",
      quantity: 1
    },
    {
      product_id: "5",
      name: "Library Stool Chair",
      image_url: "https://www.godrejinterio.com/imagestore/B2C/56101502SD01898/56101502SD01898_A2_803x602.jpg",
      price: "$20",
      quantity: 1
    },
    {
      product_id: "6",
      name: "Library Stool Chair",
      image_url: "https://pelicanessentials.com/cdn/shop/files/two_seater_grey_0002.jpg?v=1699297524&width=1000",
      price: "$20",
      quantity: 1
    },
    {
      product_id: "7",
      name: "Library Stool Chair",
      image_url: "https://pelicanessentials.com/cdn/shop/files/two_seater_grey_0002.jpg?v=1699297524&width=1000",
      price: "$20",
      quantity: 1
    },
    {
      product_id: "8",
      name: "Library Stool Chair",
      image_url: "https://wakefitdev.gumlet.io/img/sofa-sets/napper/sectional/lifestyle/rc/FMSG.jpg?w=1600",
      price: "$20",
      quantity: 1
    }
  ];

  function addtoCartContainer(){
    cartsContainer.textContent = ""
    for (let ch of cartItemsArray){
      displayCartItems(ch)
    }
  }

  function displayCartItems(eachItem){
    
  
  
    let carditemContainer = document.createElement("div");
      carditemContainer.classList.add("card")
      carditemContainer.id = `${eachItem.product_id}`
      cartsContainer.appendChild(carditemContainer)
  
      let imgItem = document.createElement("img")
      imgItem.src= `${eachItem.image_url}`
      imgItem.classList.add("image")
      imgItem.id= "img-url"
      carditemContainer.appendChild(imgItem)
  
      let cardFooterContainer = document.createElement("div");
      cardFooterContainer.classList.add("card-footer-container")
      carditemContainer.appendChild(cardFooterContainer)
  
      let textContainer = document.createElement("div")
      textContainer.classList.add("text-container")
      cardFooterContainer.appendChild(textContainer)
    
      let productName = document.createElement("p")
      productName.textContent = `${eachItem.name}`
      productName.classList.add("product-name")
      textContainer.appendChild(productName)
  
      let productPrice = document.createElement("p")
      productPrice.id = "product-price"
      productPrice.textContent = `${eachItem.price}`
      productPrice.classList.add("price")
      textContainer.appendChild(productPrice)

      let quantity = document.createElement("p")
      quantity.textContent = `Quantity: ${eachItem.quantity}`
      quantity.style.color="black";
      textContainer.appendChild(quantity)
  
  
      let iconContainer = document.createElement("div")
      iconContainer.classList.add("icon-container")
      iconContainer.id = "product-cart"
      cardFooterContainer.appendChild(iconContainer)
  
      let iconEl = document.createElement("i");
      iconEl.setAttribute("class","fa-solid fa-x")
      iconContainer.appendChild(iconEl)
  
     
  }
  
  function pushItemIntoArray(eachItem){
    let card = cartItemsArray.findIndex((each) => {
     if (each.product_id === eachItem.product_id){
       return true
     }
     else {
       return false
     }
    })
    console.log(eachItem)
    if (card  === -1 ){
      cartItemsArray.push(eachItem)
    }else{
      eachItem.quantity ++
    }
   
      addtoCartContainer()
    
  }
  

function displayItems(eachItem){
    

    let carditemContainer = document.createElement("div");
    carditemContainer.classList.add("card")
    carditemContainer.id = `${eachItem.product_id}`
    cardContainer.appendChild(carditemContainer)

    let imgItem = document.createElement("img")
    imgItem.src= `${eachItem.image_url}`
    imgItem.classList.add("image")
    imgItem.id= "img-url"
    carditemContainer.appendChild(imgItem)

    let cardFooterContainer = document.createElement("div");
    cardFooterContainer.classList.add("card-footer-container")
    carditemContainer.appendChild(cardFooterContainer)

    let textContainer = document.createElement("div")
    textContainer.classList.add("text-container")
    cardFooterContainer.appendChild(textContainer)
  
    let productName = document.createElement("p")
    productName.textContent = `${eachItem.name}`
    productName.classList.add("product-name")
    textContainer.appendChild(productName)

    let productPrice = document.createElement("p")
    productPrice.id = "product-price"
    productPrice.textContent = `${eachItem.price}`
    productPrice.classList.add("price")
    textContainer.appendChild(productPrice)




    let iconContainer = document.createElement("div")
    iconContainer.classList.add("icon-container")
    iconContainer.id = "product-cart"

    iconContainer.setAttribute("data-product-id", `${eachItem.product_id}`);
    cardFooterContainer.appendChild(iconContainer)

    let iconEl = document.createElement("i");
    iconEl.setAttribute("class","fa fa-shopping-bag icon")
    iconContainer.appendChild(iconEl)

   iconContainer.addEventListener("click", function(){
     pushItemIntoArray(eachItem)
     cartContainer.classList.add("show")
   })
    
}



for (let eachItem of productList){
   displayItems(eachItem)
}




