let addBtn = null;
let subBtn = null;
let input = null;
let total = null;
let count = 0;

function init() {
	addBtn = document.querySelector(".add");
	addBtn.addEventListener('click', increment);
	subBtn = document.querySelector(".sub");
	subBtn.addEventListener('click', decrement);
	input = document.querySelector("input");
	total = document.querySelector(".total-count");

	input.value = 1;
}

function increment() {
	let value = input.value;
	value = parseInt(value);
	if (value !== NaN) {
		count += value;
		if (total.classList.contains("neg")) {
			total.classList.remove("neg");
		}
		if (count < 0) {
			total.classList.add("neg");
		}
		total.innerHTML = count;
	}
}

function decrement() {
	let value = input.value;
	value = parseInt(value);
	if (value !== NaN) {
		count -= value;
		if (total.classList.contains("neg")) {
			total.classList.remove("neg");
		}
		if (count < 0) {
			total.classList.add("neg");
		}
		total.innerHTML = count;
	}
}

init();