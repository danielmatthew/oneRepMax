(function() {
	'use strict';

	window.addEventListener('load', windowLoadHandler, false);
	var input = document.getElementById('max');
	var result = document.getElementById('result');

	function windowLoadHandler() {
		addEventListeners();
	}

	function addEventListeners() {
		input.addEventListener('keyup', drawResult, false);
		input.addEventListener('mouseup', drawResult, false);
		input.addEventListener('touchmove', drawResult, false);
		input.addEventListener('touchend', drawResult, false);
	}

	function calculateUpperBodyMax(weight) {
		var upperMax = (weight * 1.1307) + 0.6998;
		return Math.floor(upperMax);
	}

	function calculateLowerBodyMax(weight) {
		var lowerMax = floor((weight * 1.109703) + 14.2546);
		return lowerMax;
	}

	function drawResult() {
		var weight = input.value;
		var tipsList = document.getElementsByClassName('tips');
		var tips = document.getElementsByTagName('li');

		result.innerHTML = calculateUpperBodyMax(weight);
		tipsList[0].classList.remove('hide');

		for (var i = 0; i < tips.length; i++) {
			tips[i].classList.add('appear');
		}

		result.classList.add('pulse');
	}

	// Clears specified text input on submission
	function clearTextInput(textInputName) {
		var input = document.getElementById(textInputName);
		input.value = '';
	}

	// Useful function to remove specified element - suppose could just set innerHtml to ''...
	function removeElement(el) {
		el.parentNode.removeChild(el);
	}

	function insertAfter(referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
})();