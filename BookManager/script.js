

var overlay=document.querySelector(".overlay")
var popup1=document.querySelector(".popup")
var but=document.getElementById("bbton")


but.addEventListener("click",function(){
  overlay.style.display="block"
  popup1.style.display="block"
})





var cancel=document.getElementById("Cancel")
cancel.addEventListener("click",function(event){
  event.preventDefault()
    overlay.style.display="none"
  popup1.style.display="none"
                            
})


var container=document.querySelector(".container1")
var add=document.getElementById("Add")
var title=document.getElementById("booktitle")
var author=document.getElementById("Author")
var des=document.getElementById("area")


add.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","bookcontainer")
  div.innerHTML=`  <h3>${title.value}</h3>
  <h5> ${author.value}</h3>
  <p style="font-size: 13px;margin-top: 5px;">${des.value}</p>
  <button onclick="del(event)" style="padding: 5px;margin-top: 8px; font-size: 13px; border-color:  black ;" >Remove</button>`
  container.append(div)
      overlay.style.display="none"
      popup1.style.display="none"

})


function del(event){

  event.target.parentElement.remove()

}