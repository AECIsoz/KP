let smashButton = document.getElementById('smash');
let femSymbol = document.getElementById('fem-symbol');
let messageOne = document.getElementById('message-one');
let messageTwo = document.getElementById('message-two');
let messageThree = document.getElementById('message-three');
let crossBtn = document.getElementsByClassName('btn');
let x = 0;

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
