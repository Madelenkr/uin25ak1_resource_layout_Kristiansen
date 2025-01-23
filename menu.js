let menuHTML = ""
let selectedCategory = "HTML"


//Fått tak i categoriene
resources.map((mappe, index) => menuHTML +=
`<li id="${mappe.category}" class="item">${mappe.category}</li>` 
)

console.log(menuHTML)

document.getElementById("liste").innerHTML = menuHTML
document.getElementById("HTML").addEventListener("click", myFunction);


