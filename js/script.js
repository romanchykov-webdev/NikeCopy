// burger add and remove class active
const burger = document.querySelector(".burger")
burger.addEventListener('click', ()=>{
    burger.classList.toggle("active")
})
// burger add and remove class active end

// add to bag
const add =document.querySelector(".add")
const imgBxImages = document.querySelectorAll(".imgBx img");
const productColors = document.querySelectorAll(".product-colors")
// const wrapperFooterPrice =document.querySelector(".wrapperFooter").children[0].children[0]
const wrapperFooterPrice =document.querySelector(".wrapperFooter").querySelector("span.price")
// console.log(wrapperFooterPrice)
const addToBag =document.querySelector(".addToBag")
const nameItemPopup =document.querySelector(".nameItemPopup")
// console.log(addToBag)
// console.log(nameItemPopup)


add.addEventListener('click',()=>{
  popup.classList.add("active")
  
    const imgEl1 = add.dataset.img1
    const imgEl2 = add.dataset.img2
    const imgEl3 = add.dataset.img3
    const nameEl = add.dataset.name
    const priceEl = add.dataset.price
    const idEl = add.dataset.id
    array=[]
    array.push(imgEl1,imgEl2,imgEl3,nameEl,priceEl,idEl)
    // console.log(array)
    
    // console.log(imgEl1)
    // console.log(imgEl2)
    // console.log(imgEl3)
    // console.log(priceEl)

    productColors.forEach(item=>{
      const imageUrl = item.querySelectorAll("span")
      imageUrl.forEach((item,index)=>{item.dataset.pic=array[index]})
        
      // })
      // console.log(imageUrl)
      imgBxImages.forEach((img) => {
      img.src = array[0];
    });
    nameItemPopup.textContent=array[3]
    nameItemPopup.dataset.id=array[5]
    wrapperFooterPrice.textContent=array[4]
      
    })
    
  
})
// add to bag end

// popup menu
const closePopup = document.querySelector(".closePopup")
const popup = document.querySelector(".popup")

closePopup.addEventListener('click', ()=>{
    popup.classList.remove("active")
})

// Getclass "product-colors span"
const productColorsSpans = document.querySelectorAll(".product-colors span");

// Add a click element
productColorsSpans.forEach((span) => {
  span.addEventListener("click", function() {
    // Remove "active" class "product-colors span"
    productColorsSpans.forEach((span) => {
      span.classList.remove("active");
    });

    // Add "active" class  clicked element
    this.classList.add("active");

    // border color o"active" class to the value"data-color-sec" 
    const activeColorSec = this.getAttribute("data-color-sec");
    productColorsSpans.forEach((span) => {
      span.style.borderColor = activeColorSec;
    });

    // Change  background color  "popup" 
    const primaryColor = this.getAttribute("data-color-primary");
    // const popup =document.body.style.background = primaryColor;
    const popup =document.querySelector(".popup")
    popup.style.background = primaryColor;

    // Change elements
    const contentHeadings = document.querySelectorAll(".nameItemPopup, .content h3");
    contentHeadings.forEach((heading) => {
      heading.style.color = activeColorSec;
    });

    // Change the background  "data-color-sec" attribute of the clicked element
    const containerImgBoxes = document.querySelectorAll(".container .imgBx");
    containerImgBoxes.forEach((imgBox) => {
      imgBox.style.background = activeColorSec;
    });

    // Change the background color 
    const containerButtons = document.querySelectorAll(".container .details button");
    containerButtons.forEach((button) => {
      button.style.background = activeColorSec;
    });

    // Update the "src" attribute 
    // const imgBxImages = document.querySelectorAll(".imgBx img");
    const imageUrl = this.getAttribute("data-pic");
    imgBxImages.forEach((img) => {
      img.src = imageUrl;
    });
  });
});
// popup menu end

// slider data atribut
   // Получение всех элементов с классом "itemCartSlider"

const itemCartSlider = document.querySelectorAll('.itemCartSlider');
  itemCartSliderArray = []
  itemCartSlider.forEach(item=>{
  item.addEventListener('click', function(){
  popup.classList.add("active")
  const idEl=item.dataset.id
  const quantityEl=item.dataset.quantity  
  quantityE = parseInt(quantityEl)+1
  item.dataset.quantity=quantityE  
  const imgEl=item.querySelector("img").dataset.img
  const nameEl=item.querySelector(".name").dataset.name     
  const priceEl=item.querySelector(".name").dataset.price    
      // console.log(idEl)
      // console.log(imgEl)
      // console.log(nameEl)
      const id = idEl
      const quantity = quantityE
      const img = imgEl
      const name = nameEl
      const price = priceEl

      // const existingItemIndex = itemCartSliderArray.findIndex(item => item.id === id);
      // if (existingItemIndex !== -1) {
      //     itemCartSliderArray[existingItemIndex].quantity = quantity ;
      // }else{
        itemCartSliderArray = []
          itemCartSliderArray.push({
              id: id,
              img: img,
              name:name,
              quantity: quantity,
              price:price
            })
            // console.log(itemCartSliderArray[0].name)
          
          const imgBxImages = document.querySelectorAll(".imgBx img");
          // console.log(imgBxImages)
          
          const productColors = document.querySelectorAll(".product-colors")
          wrapperFooterPrice.textContent=itemCartSliderArray[0].price
          nameItemPopup.textContent=itemCartSliderArray[0].name
          nameItemPopup.dataset.id=itemCartSliderArray[0].id

          productColors.forEach(item=>{
            const imageUrl = item.querySelectorAll("span")
            imageUrl.forEach(item=>{
              imgBxImages.forEach((img) => {
                img.src = itemCartSliderArray[0].img
              });
              item.dataset.pic=itemCartSliderArray[0].img
            })
            // console.log(imageUrl)
            
          })
          // Add a click element
    productColorsSpans.forEach((span) => {
    span.addEventListener("click", function() {
    // Remove "active" class "product-colors span"
    productColorsSpans.forEach((span) => {
      span.classList.remove("active");
    });

    // Add "active" class  clicked element
    this.classList.add("active");

    // border color o"active" class to the value"data-color-sec" 
    const activeColorSec = this.getAttribute("data-color-sec");
    productColorsSpans.forEach((span) => {
      span.style.borderColor = activeColorSec;
    });

    // Change  background color  "popup" 
    const primaryColor = this.getAttribute("data-color-primary");
    // const popup =document.body.style.background = primaryColor;
    const popup =document.querySelector(".popup")
    popup.style.background = primaryColor;

    // Change elements
    const contentHeadings = document.querySelectorAll(".wrapper h2, .content h3");
    contentHeadings.forEach((heading) => {
      heading.style.color = activeColorSec;
    });

    // Change the background  "data-color-sec" attribute of the clicked element
    const containerImgBoxes = document.querySelectorAll(".wrapper .imgBx");
    containerImgBoxes.forEach((imgBox) => {
      imgBox.style.background = activeColorSec;
    });

    // Change the background color 
    const containerButtons = document.querySelectorAll(".container .details button");
    containerButtons.forEach((button) => {
      button.style.background = activeColorSec;
    });

    // Update the "src" attribute 
    const imgBxImages = document.querySelectorAll(".imgBx img");
    const imageUrl = this.getAttribute("data-pic");
    imgBxImages.forEach((img) => {
      img.src = imageUrl;
    });
  });
});
// popup menu end
      // }
  // console.log(itemCartSliderArray)
  
  })
  
}) 

// slider data atribut end
// slider
$(document).ready(function(){
  let a= document.querySelector(".prevH")
  
  $('.wrapperHeaderSlider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.prevH'),
      nextArrow: $('.nextH'),
      responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]

    });
})
// slider end
// bagg
const spanWrapper=document.querySelectorAll(".spanWrapper")
spanWrapper.forEach(item=>{
  
  item.addEventListener('click',()=>{
    spanWrapper.forEach(item=>{item.classList.remove("active")})
    item.classList.add("active")
    if(item.classList.contains("active")){
      addToBag.classList.add("active")
      addToBag.removeAttribute("disabled")
    }else{
      addToBag.classList.remove("active")
      addToBag.setAttribute("disabled")
    }

  })
})
// bagg
// addToBag 
// console.log(addToBag)
const ArrayToBag=[]
addToBag.addEventListener('click', function(){
  // const getPopupImgEl=document.querySelector(".imgBx").children[0].src
  const getPopupImgEl=document.querySelector(".imgBx").querySelector("img").src
  // console.log(getPopupImgEl)
  const nameItemEl=document.querySelector(".nameItemPopup").textContent
  // console.log(nameItemEl)
  const nameItemIdEl=document.querySelector(".nameItemPopup").dataset.id
  // console.log(nameItemIdEl)
  const spanWrapper =document.querySelectorAll(".spanWrapper")
  let sizeItemEl=''
  spanWrapper.forEach(item=>{
    if(item.classList.contains("active")){
      // console.log(item.dataset.size)
      sizeItemEl=item.dataset.size
      
    }
  })
  // const priceEl = document.querySelector(".wrapperFooter").children[0].children[0].textContent
  const priceEl = document.querySelector(".wrapperFooter").querySelector(".price").textContent
  // console.log(priceEl)
  // console.log(priceEl.textContent)
  const productColorsEl = document.querySelector(".product-colors").querySelector("span.active").dataset.color
  // console.log(productColorsEl)
     // else item con atribute has, abdae quantity and like
     const existingItemIndex = ArrayToBag.findIndex(item => item.id === nameItemIdEl);
     if (existingItemIndex !== -1) {
       ArrayToBag[existingItemIndex].size = sizeItemEl;
       ArrayToBag[existingItemIndex].color = productColorsEl;
   } else {
  ArrayToBag.push({
    id:nameItemIdEl,
    name:nameItemEl,
    color: productColorsEl,
    price:priceEl,
    img:getPopupImgEl,
    size:sizeItemEl
  })
}
console.log(ArrayToBag)
if(addToBag.classList.contains("active")){
  popup.classList.remove("active")
  wrapStep.classList.add("active")
}

function removeClass() {
  wrapStep.classList.remove('active');
}

// funcrion remove class
setTimeout(removeClass, 2000);
addToBag.classList.remove("active")
addToBag.setAttribute("disabled","")
spanWrapper.forEach(item=>{item.classList.remove("active")})
  
})
// addToBag  end

// popup step
// console.log(window.innerWidth);
// console.log(window.innerHeight);
const w = (window.innerWidth /2)-50
const h = (window.innerHeight /2)-50
// console.log(w)
// console.log(h)

const wrapStep = document.querySelector(".wrapStep")
wrapStep.style.top= h + 'px'
wrapStep.style.left= w + 'px'


// popup step end

// color circle
let blockImg = document.querySelector(".blockImg").querySelector("img")
// console.log(blockImg)

const colorCheng=document.querySelector(".colorCheng").querySelector("svg").querySelectorAll("circle")
colorCheng.forEach(item=>{
  
  item.addEventListener('click',()=>{
    colorCheng.forEach(item=>{item.classList.remove("active")})
    item.classList.add("active")
    // console.log(item.dataset.img)
    if(!item.dataset.img == ""){
    blockImg.src=item.dataset.img
    }else{
      
    }
  })
  // console.log(item)
})

// color circle end
// bag header
const bag = document.querySelector(".bagItem")
// console.log(bag)
arayBagHeader=[]
bag.addEventListener('click', ()=>{
  const idEl = document.querySelector(".blockImg").querySelector("span.add").dataset.id
  // console.log(idEl)
  const imgEl = document.querySelector(".blockImg").querySelector("img").src
  // console.log(imgEl)
  
  const nameEl = document.querySelector(".blockDesc").querySelector(".name").textContent.replace(/\s+/g,' ').trim()
  // console.log(nameEl)
  const priceEl = document.querySelector(".priceSizeBag").querySelector(".price").querySelector("span").textContent
  // console.log(priceEl)
  const sizeEl = document.querySelector(".changeSize").value
  // console.log(sizeEl)
  let colorItemEl =''
  colorCheng.forEach(item=>{
    if(item.classList.contains('active')){
      // console.log(item.dataset.color)
      colorItemEl=item.dataset.color
    }
  })
  // console.log(colorItemEl)
    // else item con atribute has, abdae quantity and like
    const existingItemIndex = arayBagHeader.findIndex(item => item.id === idEl);
    if (existingItemIndex !== -1) {
      arayBagHeader[existingItemIndex].size = sizeEl;
      arayBagHeader[existingItemIndex].color = colorItemEl;
  } else {
  arayBagHeader.push({
    id: idEl,
    img: imgEl,
    name: nameEl,
    size:sizeEl,
    color:colorItemEl

  })
}
  console.log(arayBagHeader)
  
})
// bag header end