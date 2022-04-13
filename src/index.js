/* eslint-disable no-empty */
import Receiver from './receiver/receiver';
import './styles/styles.css';

const digits = document.querySelectorAll('.digit, .decimal');
const operations = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign, .decimal, .memory)');
const equal = document.querySelector('.equal-sign');
const screen = document.querySelector('.calc-screen .initial');

const memoryValue = document.querySelector('.memory-value span');
const memoryBtns = document.querySelectorAll('.memory');

const receiver = new Receiver();

digits.forEach((digit) => {
	digit.addEventListener('click', () => {
		if (!receiver.operator && !receiver.rightOperand && !receiver.finish) {
			// handle 0 before "."
			if (digit.value === '0' && !receiver.leftOperand.includes('.') && receiver.leftOperand === '0') {
				receiver.leftOperand = digit.value;
				screen.value = receiver.leftOperand;
			} else if (digit.value === '.' && receiver.leftOperand.includes('.')) {

			} else {
				// handle left operator
				if (!receiver.leftOperand && digit.value === '.') {
					receiver.handleLeftOperand(0);
				}
				receiver.handleLeftOperand(digit.value);
				screen.value = receiver.leftOperand;
			}
			// handle left operator after equal
		} else if (receiver.finish) {
			receiver.clearUI();
			receiver.handleLeftOperand(digit.value);
			screen.value = receiver.leftOperand;
		} else if (receiver.operator && !receiver.finish) {
			if (digit.value === '0' && !receiver.rightOperand.includes('.') && receiver.rightOperand === '0') {
				receiver.rightOperand = digit.value;
				screen.value = receiver.rightOperand;
			} else if (digit.value === '.' && receiver.rightOperand.includes('.')) {

			} else {
				// handle right operator
				if (!receiver.rightOperand && digit.value === '.') {
					receiver.handleRightOperand(0);
				}
				receiver.handleRightOperand(digit.value);
				screen.value = receiver.rightOperand;
			}
		}
	});
});

operations.forEach((operation) => {
	operation.addEventListener('click', () => {
		// clicked basic or extended operation ?
		if (operation.classList.contains('extend-operator')) {
			receiver.operator = operation.value;
			screen.value = receiver.execute();
		} else { // clicked basic operation
			// clicked after equal?
			if (receiver.finish) {
				receiver.finish = false;
				receiver.rightOperand = '';
			}
			// clicked AC operation?
			if (operation.value === 'AC') {
				screen.value = receiver.clearCalculator();
				// console.log(calculator);
			} else { // clicked basic operation
				// clicked operator when left operator right was entered
				if (receiver.leftOperand && receiver.operator && receiver.rightOperand) {
					screen.value = receiver.execute();
					receiver.operator = operation.value;
					receiver.finish = false;
					receiver.rightOperand = '';
				}
				receiver.operator = operation.value;
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
});

memoryBtns.forEach((memoryBtn) => {
	memoryBtn.addEventListener('click', () => {
		const valueToMemory = screen.value;
		if (memoryBtn.value === 'M+' || memoryBtn.value === 'M-') {
			memoryValue.textContent = receiver.handleMemory(memoryBtn.value, valueToMemory);
		} else if (memoryBtn.value === 'MR') {
			// check in which operator return memory value
			screen.value = receiver.handleMemoryRead(memoryBtn.value);
		} else {
			memoryValue.textContent = receiver.handleMemory(memoryBtn.value);
		}
	});
});
