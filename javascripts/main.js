"use strict";

const GreetingGenerator = require('./greetingGenerator');

document.getElementById('buttons').addEventListener('click', (event) => {
	console.log("check");
	let languageSelected;
	if (event.target.id === 'buttons') {
		languageSelected = 'english';
		//don't set languageSelected
	} else {
		languageSelected = event.target.id;
	}
	console.log("selected language", languageSelected);
	document.getElementById("output").innerHTML = GreetingGenerator[languageSelected]();
});


