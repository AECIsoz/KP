// changing color of part of heading on click
let smashButton = document.getElementById('smash');
let femSymbol = document.getElementById('fem-symbol');

smashButton.addEventListener('click', () => {
	smashButton.classList.toggle('explode');
	function toggleImage() {
		if (x == 0) {
			femSymbol.src = 'images/femsymbol_red.png';
			x = 1;
		} else {
			femSymbol.src = 'images/femsymbol.png';
			x = 0;
		}
	}
	toggleImage();
});

// show message on click of button
let messageOne = document.getElementById('message-one');
let messageTwo = document.getElementById('message-two');
let messageThree = document.getElementById('message-three');
let crossBtn = document.getElementsByClassName('btn');
let x = 0;

for (let x = 0; x < crossBtn.length; x++) {
	if (x == 0) {
		crossBtn[x].addEventListener('click', () => {
			messageOne.classList.toggle('hide');
		});
	} else if (x == 1) {
		crossBtn[x].addEventListener('click', () => {
			messageTwo.classList.toggle('hide');
		});
	} else {
		crossBtn[x].addEventListener('click', () => {
			messageThree.classList.toggle('hide');
		});
	}
}

// remove message on click
if (messageOne.classList.contains('hide') === true) {
	messageOne.addEventListener('click', () => {
		messageOne.classList.add('hide');
	});
}
if (messageTwo.classList.contains('hide') === true) {
	messageTwo.addEventListener('click', () => {
		messageTwo.classList.add('hide');
	});
}
if (messageThree.classList.contains('hide') === true) {
	messageThree.addEventListener('click', () => {
		messageThree.classList.add('hide');
	});
}

// add text to finish sentence
let inputTextBox = document.getElementById('input-text');

inputTextBox.addEventListener('keypress', function (event) {
	if (event.key === 'Enter' && !event.shiftKey) {
		event.preventDefault();
		document.getElementById('finish-sentence').click();
	}
});

function enterText() {
	let inputForm = document.getElementById('input-form');
	let inputText = document.getElementById('place-text').innerHTML;
	console.log('input text: ' + inputText);
	inputText += ' ' + inputForm.elements[0].value;
	document.getElementById('place-text').innerText = inputText;
	inputTextBox.value = '';
}
