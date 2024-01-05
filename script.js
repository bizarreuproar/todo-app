const input = document.getElementById("input");
const ul = document.getElementById("todos");
const allClear = document.getElementById("allClear");

allClear.addEventListener("click", ()=>{
	Array(...ul.childNodes).forEach(e=>{
		console.log(e);
		ul.removeChild(e)
	})
	localStorage.setItem("todo values", JSON.stringify([]));
})

const get = () =>{
	const items = JSON.parse(localStorage.getItem("todo values"));
	items.forEach((a) => {
		const listItem = document.createElement("li");
		listItem.classList.add("list");
		const button = document.createElement("button");
		button.textContent = "x";
		listItem.textContent = a;
		button.addEventListener("click", c);
		button.id = "btncheck";
		listItem.appendChild(button);
		ul.appendChild(listItem);
	});
}

input.addEventListener("keydown", (e) => {
	if (e.key == "Enter") {
		const local = JSON.parse(localStorage.getItem("todo values"));
		localStorage.setItem("todo values", JSON.stringify([...local, input.value]))
		e.target.value = "";
		const items = JSON.parse(localStorage.getItem("todo values"));
		const listItem = document.createElement("li");
		const button = document.createElement("button");
		button.textContent = "x";
		listItem.classList.add("list");
		button.id = "btncheck";
		button.addEventListener("click", c);
		listItem.textContent = items.pop();
		listItem.appendChild(button);
		ul.appendChild(listItem);

	}
})

function c(e) {
	// console.log(e.target.parentElement);
	ul.childNodes.forEach(a => {
		if (a == e.target.parentElement) {
		 const items =	JSON.parse(localStorage.getItem("todo values"));
			items.splice(Array(...ul.childNodes).indexOf(a) - 1, 1);
		localStorage.setItem("todo values", JSON.stringify([...items]));
		ul.removeChild(a);
		}
	})
}

if (!localStorage.getItem("todo values")) {
	localStorage.setItem("todo values", JSON.stringify([]));
} else {
	get();
}
