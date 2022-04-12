/* eslint-disable no-empty */
import Calculator from './calculator';
import Receiver from './receiver/receiver';
import './styles/styles.css';

const digits = document.querySelectorAll('.digit, .decimal');
const operations = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign, .decimal, .memory)');
const memoryBtns = document.querySelectorAll('.memory');
console.log(memoryBtns);
const equal = document.querySelector('.equal-sign');
const screen = document.querySelector('.calc-screen .initial');

const calculator = new Calculator();
const receiver = new Receiver(calculator);

digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
		if (!receiver.operator && !receiver.rightOperand && !receiver.finish) {
			// handle 0 before "."
			if (digit.value === '0' && !receiver.leftOperand.includes('.') && receiver.leftOperand === '0') {
				receiver.leftOperand = digit.value;
				screen.value = receiver.leftOperand;
				console.log(receiver.leftOperand);
			} else if (digit.value === '.' && receiver.leftOperand.includes('.')) {

			} else {
				// handle left operator
				if (!receiver.leftOperand && digit.value === '.') {
					receiver.handleLeftOperand(0);
				}
				receiver.handleLeftOperand(digit.value);
				screen.value = receiver.leftOperand;
				console.log(receiver.leftOperand);
			}
			// old receiver.leftOperand && receiver.rightOperand && receiver.finigh
		} else if (receiver.finish) {
			receiver.clearUI();
			receiver.handleLeftOperand(digit.value);
			screen.value = receiver.leftOperand;
		} else if (receiver.operator && !receiver.finish) {
			if (digit.value === '0' && !receiver.rightOperand.includes('.') && receiver.rightOperand === '0') {
				receiver.rightOperand = digit.value;
				screen.value = receiver.rightOperand;
				console.log(receiver.rightOperand);
			} else if (digit.value === '.' && receiver.rightOperand.includes('.')) {

			} else {
				// handle right operator
				if (!receiver.rightOperand && digit.value === '.') {
					receiver.handleRightOperand(0);
				}
				receiver.handleRightOperand(digit.value);
				screen.value = receiver.rightOperand;

				console.log(receiver.rightOperand);
			}
		}
	});
});

operations.forEach((operation) => {
	operation.addEventListener('click', (e) => {
		// clicked basic or extended operation ?
		if (operation.classList.contains('extend-operator')) {
			console.log(`Extend ${operation.value}`);
			receiver.operator = operation.value;
			screen.value = receiver.execute();

			console.log(calculator);
		} else { // clicked basic operation
			// clicked after equal?
			if (receiver.finish) {
				receiver.finish = false;
				receiver.rightOperand = '';
			}
			// clicked AC operation?
			if (operation.value === 'AC') {
				screen.value = receiver.clearCalculator();
				console.log(calculator);
			} else { // clicked basic operation
				// clicked operator when left operator right was entered
				if (receiver.leftOperand && receiver.operator && receiver.rightOperand) {
					screen.value = receiver.execute();
					receiver.operator = operation.value;
					receiver.finish = false;
					receiver.rightOperand = '';
				}
				receiver.operator = operation.value;
				console.log(receiver.operator);
			}
		}
	});
});

equal.addEventListener('click', () => {
	if (!receiver.operator && !receiver.rightOperand) {
		screen.value = receiver.leftOperand || screen.value;
		receiver.finish = true;
	} else {
		if (!receiver.rightOperand) receiver.rightOperand = receiver.leftOperand;
		screen.value = receiver.execute();
	}
	console.log(calculator);
});

memoryBtns.forEach((memoryBtn) => {
	memoryBtn.addEventListener('click', () => {
		if (memoryBtn.value === 'M+' || memoryBtn.value === 'M-') {
			receiver.handleMemory(memoryBtn.value, screen.value);
		} else if (memoryBtn.value === 'MR') {
			// check in which operator return memory value
			// TODO:
			// после написания закинуть все в receiver
			// дописать правильную обработку finish типо когда прочитал данные
			// из памяти чтобы после ввода числа оно перезаписывала
			// текущий операнд а не обнулялась и переписывала левый
			if (!receiver.operator) {
				receiver.handleLeftOperand(receiver.handleMemory(memoryBtn.value));
				// receiver.leftOperand = receiver.handleMemory(memoryBtn.value);
				screen.value = receiver.leftOperand;
			} else if (!receiver.rightOperand) {
				receiver.handleRightOperand(receiver.handleMemory(memoryBtn.value));
				screen.value = receiver.rightOperand;
			}
		} else {
			receiver.handleMemory(memoryBtn.value);
		}
		console.log(calculator);
	});
});

// TODO: calculator memory implementation
