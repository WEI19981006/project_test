let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

btn.addEventListener("click", function (e) {
    if(list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
})



let cardslide = document.querySelector(".cardslide");
let slideshoppingcar = document.querySelector(".slideshoppingcar")
let bg = document.querySelector(".bg-color");
// console.log(cardslide);

cardslide.addEventListener("click", function (e) {
  e.preventDefault();
  slideshoppingcar.classList.toggle("slideshoppingcarblock");
    bg.style.display = "block";
})


bg.addEventListener("click",function(e){
  bg.style.display = "none";
  slideshoppingcar.classList.toggle("slideshoppingcarblock");
})
// let html = document.querySelector(html)

let hd_btn = document.querySelector(".hd-line");
hd_btn.addEventListener("click",function(e){
  let phone_slidebar = document.querySelector(".phone-slidebar");
  if(this.getAttribute("class") == "hd-line"){
    this.classList.add("click");
    phone_slidebar.classList.add("slide")
  }else{
    this.classList.remove("click");
    phone_slidebar.classList.remove("slide")
  }
})
