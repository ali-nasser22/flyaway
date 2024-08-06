document.querySelector("#drop-down").onclick=()=>{
    document.querySelector("ul").classList.toggle("d-none");
}
let lis = [...document.querySelectorAll("ul li")];
lis.forEach((li)=>{
    li.onclick=()=>{
        lis.forEach((li)=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
        document.querySelector("#dest").value=li.innerHTML;
    }
})
document.querySelector("#drop-down-from").onclick=()=>{
    document.querySelector("#from-list").classList.toggle("d-none");
}
let lisFrom = [...document.querySelectorAll("#from-list li")];
lisFrom.forEach((li)=>{
    li.onclick=()=>{
        lisFrom.forEach((li)=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
        document.querySelector("#from").value=li.innerHTML;
    }
})
let btns=[...document.querySelectorAll("button")];
btns[0].onclick=()=>{
    window.location.href="index.html";
}
btns[1].onclick=()=>{
    window.location.href="http://maajour.kesug.com";
}
document.querySelector("#search").onclick=()=>{
    alert("check you email for the full information!")
}
document.querySelector("#search1").onclick=()=>{
    alert("You must log in before booking!")
}