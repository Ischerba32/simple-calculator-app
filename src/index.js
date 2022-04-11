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
				receiver.handleRightOperand(digit.value);
				screen.value = receiver.rightOperand;

				console.log(receiver.rightOperand);
			}
		}
	});
});

operations.forEach((operation) => {
	operation.addEventListener('click', (e) => {
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
	});
});

equal.addEventListener('click', () => {
	if (!receiver.rightOperand) receiver.rightOperand = receiver.leftOperand;
	screen.value = receiver.execute();

	console.log(calculator);
});

// TODO: commands like "left operand - operator"
// TODO: calculator memory implementation
// TODO: execute when clicked operand after executing operation