let menuHTML = ""
let selectedCategory = []


//Fått tak i categoriene

resources.map((mappe, index) => menuHTML +=
`<li id="${mappe.category}" class="item"><button onclick="myFunction('${mappe.category}')">${mappe.category}</button></li>` 

)



document.getElementById("liste").innerHTML = menuHTML

//document.getElementById("HTML").addEventListener("click", myFunction);

function myFunction(navn) {
   selectedCategory = resources.filter((info) => info.category == navn) 
    console.log(selectedCategory)

}


