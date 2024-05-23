let menuToggleBtn = document.getElementById("toggle-menu");
let mainNav = document.querySelector(".main-nav");
menuToggleBtn.addEventListener("click",event=>{
    let isHidden = event.currentTarget.classList.contains("hidden");
    if (isHidden){
        menuToggleBtn.setAttribute("src","./images/icon-close.svg"); 
    }
    else{
        menuToggleBtn.setAttribute("src","./images/icon-hamburger.svg");
    }
    menuToggleBtn.classList.toggle("hidden");
    mainNav.classList.toggle("active");
})

let dropDownMenus = document.querySelectorAll(".dropdown");
dropDownMenus.forEach(element => {
    console.log(element);
    element.addEventListener("click",event=>{
        let currentActive = document.querySelector("li.active");
        if (currentActive !== null && currentActive !== event.currentTarget ){
            currentActive.classList.remove("active");
            
        }
        console.log(event.currentTarget)
        event.currentTarget.classList.toggle("active");
    })
});