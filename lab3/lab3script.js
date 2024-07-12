/*Shape*/


let shape = document.querySelector(".shapediv")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
let btncircle = document.querySelector(".btncircle")
let displayshape = document.querySelector(".shapediv p")

btnsquare.addEventListener("click",function(){
    shape.className = "square"
displayshape.textContent="square".toUpperCase()
})

btnrectangle.addEventListener("click",function(){
    shape.className = "rectangle"
displayshape.textContent="rectangle".toUpperCase()
})

btncircle.addEventListener("click",function(){
    shape.className = "circle"
displayshape.textContent="circle".toUpperCase()
})



/*
/***DROPDOWN MENU
 * Collect element
*/
let menubtn = document.querySelector(".menubtn")
let collapsemenu = document.querySelector(".collapsemenu")

//add click event
menubtn.addEventListener("click",function(){
    collapsemenu.classList.toggle("closeToOpen") 
})

 //collect modal window element

let card = document.querySelector (".card")
let modalwindow = document.querySelector(".modalwindow")
let  closemodal = document.querySelector(".closemodal")

//add click event to open modal window

card.addEventListener("click",function(){
    modalwindow.style.display = "block"
})

//close the modal window on X
closemodal.addEventListener("click",function(){
    modalwindow.style.display = "none"
})

//close the modal window when the user clicks anywhere 
window.addEventListener("click",function(event){
    if(event.target == modalwindow){
        modalwindow.style.display = "none"
    }
})