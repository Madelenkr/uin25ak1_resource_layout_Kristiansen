let menuHTML = ""
let infoHTML = ""
let selectedCategory = []
let selectedCategory1 = []


//Fått tak i kategoriene

resources.map((mappe, index) => menuHTML +=
`<li id="${mappe.category}" class="item"><button onclick="myFunction('${mappe.category}')">${mappe.category}</button></li>` 

)



document.getElementById("liste").innerHTML = menuHTML

myFunction("HTML")

function myFunction(navn) {
   selectedCategory1 = resources.filter((info) => info.category == navn)
   selectedCategory = selectedCategory1[0]

    console.log(selectedCategory)

    infoHTML += `<article class="item">
                    <h2 id="topptext">${selectedCategory.category}</h2>
                    <span id ="text">${selectedCategory.text}</span>
                    
                    
                    <ul class="linker">
                        ${selectedCategory.sources.map(source =>
                        `<li><a href ="${source.url}">${source.title} </a> </li>`).join("")}
                    </ul>
                </article>`

                document.getElementById("liste").innerHTML = menuHTML + infoHTML

                infoHTML = ""

    }