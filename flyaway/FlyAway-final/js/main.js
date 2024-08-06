let toggle=document.querySelector(".toggle");
let toggleIcon=document.querySelector(".toggle i");
console.log(toggleIcon)
toggle.onclick=()=>{
  document.querySelector(".drop-down-menu").classList.toggle("open");
  const isOpen=document.querySelector(".drop-down-menu").classList.contains("open");
  toggleIcon.classList =isOpen ?'fa-solid fa-xmark':'fa-solid fa-bars';
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let fav=document.querySelectorAll(".heart");
fav.forEach((ele)=>{
  ele.onclick=()=>{
    ele.classList.toggle("fav");
  }
})
document.querySelector("footer").onmouseover=()=>{
  document.querySelector("footer").style.background="rgba(118, 155, 252, 0.7)";
}
document.querySelector("footer").onmouseout=()=>{
  document.querySelector("footer").style.background="#fff";
}
document.querySelector("#join").onclick=()=>{
  document.querySelector(".join").classList.remove("disp-none");
}
document.querySelector(".join i").onclick=()=>{
  document.querySelector(".join").classList.add("disp-none");
}
document.querySelector("#join1").onclick=()=>{
  document.querySelector("#join2").classList.remove("disp-none");
}
document.querySelector(".exclusive-deals-small .join i").onclick=()=>{
  document.querySelector("#join2").classList.add("disp-none");
}
