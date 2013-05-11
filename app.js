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
		result.innerHTML = calculateUpperBodyMax(weight);
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