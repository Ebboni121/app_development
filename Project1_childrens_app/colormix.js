let color = document.querySelector(".colordiv")
let btnred = document.querySelector(".btnred")
let btnyellow = document.querySelector(".btnyellow")
let btnblue = document.querySelector(".btnblue")
let displaycolor = document.querySelector(".colordiv p")

btnred.addEventListener("click",function(){
   color.className = "red"
displaycolor.textContent="red".toUpperCase()
})


btnyellow.addEventListener("click",function(){
    color.className = "yellow"
displaycolor.textContent="yellow".toUpperCase()
})

btnblue.addEventListener("click",function(){
    color.className = "blue"
displaycolor.textContent="blue".toUpperCase()
})