/* eslint-disable no-empty */
import Calculator from './calculator';
import Receiver from './receiver/receiver';
import './styles/styles.css';

const digits = document.querySelectorAll('.digit, .decimal');
const operations = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign, .decimal)');
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
				if (!receiver.leftOperand && digit.value === '.') {
					receiver.handleLeftOperand(0);
				}
				receiver.handleLeftOperand(digit.value);
				screen.value = receiver.leftOperand;
				console.log(receiver.leftOperand);
			}
		} else if (receiver.leftOperand && receiver.rightOperand && receiver.finish) {
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
		if (operation.classList.contains('extend-operator')) {
			console.log(`Extend ${operation.value}`);
			receiver.operator = operation.value;
			screen.value = receiver.execute();

			console.log(calculator);
		} else {
			if (receiver.finish) {
				receiver.finish = false;
				receiver.rightOperand = '';
			}

			if (operation.value === 'AC') {
				screen.value = receiver.clearCalculator();
				console.log(calculator);
			} else {
				receiver.operator = operation.value;
				console.log(receiver.operator);
			}
		}
	});
});

equal.addEventListener('click', () => {
	if (!receiver.operator && !receiver.rightOperand) {
		screen.value = receiver.leftOperand || screen.value;
	} else {
		if (!receiver.rightOperand) receiver.rightOperand = receiver.leftOperand;
		screen.value = receiver.execute();
	}
	console.log(calculator);
});

// TODO: calculator memory implementation
// TODO: execute when clicked operand after executing operation