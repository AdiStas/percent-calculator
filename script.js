'use strict';

let result = document.querySelector('.result-value');
let countBtn = document.querySelector('.count-btn');
let resetBtn = document.querySelector('.reset-btn');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');

countBtn.addEventListener('click', function() {
  	let sumValue = sum.value;
  	let percentValue = percent.value;
  	if (sumValue === "" || percentValue === "") {
  		result.classList.add('alert-text');
    	result.textContent = "Кажется вы не ввели данные";
	} else {
		result.textContent = sumValue * percentValue / 100 + " составляет " + percentValue + "% " + " от числа " + sumValue;
	};
});

resetBtn.addEventListener('click', function() {
	result.textContent = '';
	sum.value = '';
	percent.value = '';
});