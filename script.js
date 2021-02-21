// let random =Math.floor(Math.random()*(255*255*255))
// random=random.toString(16)

function addItem(){
    const ul=document.createElement('ul')
    document.querySelector('button').after(ul)
    const li=document.createElement("li")
    li.appendChild(document.createTextNode(document.querySelector("input").value))
    document.querySelector("ul").appendChild(li).setAttribute("onclick",'removeItem(this)')
    let random =Math.floor(Math.random()*(255*255*255))
    random=random.toString(16)
    document.querySelectorAll("li")[document.querySelectorAll("li").length-1].style.color="#"+random
}
function removeItem(element){
    element.remove()
}
