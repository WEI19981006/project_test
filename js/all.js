$(function () {
  $(".flexslider").flexslider({
    animation: "fade",
    touch: true,
    animationSpeed: 2000,
    slideshowSpeed: 7000,
    directionNav: false,
    pauseOnAction: false
  });


});



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







//右下角滑上去

let back_btn = document.querySelector("div.backtotop a");

// window.addEventListener("scroll", function() {
//   if (window.pageYOffset > 100) {
//     back_btn.classList.add("show");
//   } else {
//     back_btn.classList.remove("show");
//   }
// });


back_btn.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("讚");
  window.scrollTo({ top: 0, behavior: "smooth" });
});