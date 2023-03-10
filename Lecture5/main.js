// პ  ი  რ  ვ  ე  ლ  ი
const button = document.getElementById("hider");
const text = document.getElementById("text");

button.addEventListener("click", function() {
	text.style.display = "none";
});



// მ  ე  ო  რ  ე
const div = document.createElement("div");
div.setAttribute("id", "card");

const h2Elmnt = document.createElement("h2");
h2Elmnt.textContent = "Vaniko";

const aElmnt = document.createElement("a");
aElmnt.setAttribute("href", "#");
aElmnt.textContent = "Go profile";

div.appendChild(h2Elmnt);
div.appendChild(aElmnt);

const body = document.body.appendChild(div);
console.log(body)


// const div = '<div id="card"> <h2>Vaniko</h2> <a href="#">Go profile</a> </div>';
// document.body.insertAdjacentHTML('beforeend', div);


// მ  ე  ს  ა  მ  ე
const card = document.querySelector("#card");
card.style.backgroundColor = "red";