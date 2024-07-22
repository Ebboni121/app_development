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

let secondary = document.querySelector(".secondary")
let btnorange = document.querySelector(".btnorange")
let btnpink = document.querySelector(".btnpink")
let btngrey = document.querySelector(".btngrey")
let btnbrown = document.querySelector(".btnbrown")
let btngreen = document.querySelector(".btngreen")
let btnpurple = document.querySelector(".btnpurple")
let showcolor = document.querySelector(".secondary p")



btnorange.addEventListener("click",function(){
    showcolor.className = "orange"
 showcolor.textContent="red + yellow = orange".toUpperCase()
 })


btnpink.addEventListener("click",function(){
    showcolor.className = "pink"
 showcolor.textContent="red + white = pink".toUpperCase()
 })


btngrey.addEventListener("click",function(){
    showcolor.className = "grey"
 showcolor.textContent="white + black = grey".toUpperCase()
 })


btnbrown.addEventListener("click",function(){
    showcolor.className = "brown"
 showcolor.textContent="red + black = brown".toUpperCase()
 })


btngreen.addEventListener("click",function(){
    showcolor.className = "green"
 showcolor.textContent="blue + yellow = green".toUpperCase()
 })

 btnpurple.addEventListener("click",function(){
    showcolor.className = "purple"
 showcolor.textContent="blue + red = purple".toUpperCase()
 })