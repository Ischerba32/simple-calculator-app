import Calculator from './calculator';
import Receiver from './receiver/receiver';
import './styles/styles.css';

const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign)');
const equal = document.querySelector('.equal-sign');
const screen = document.querySelector('.calc-screen .initial');

const calculator = new Calculator();
const receiver = new Receiver(calculator);

digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
		if (!receiver.operator && !receiver.rightOperand && !receiver.finish) {
			receiver.handleLeftOperand(e.target.value);
			screen.value = receiver.leftOperand;
			console.log(receiver.leftOperand);
		} else if (receiver.leftOperand && receiver.rightOperand && receiver.finish) {
			receiver.clearUI();

			receiver.handleLeftOperand(e.target.value);
			screen.value = receiver.leftOperand;
		} else if (receiver.operator && !receiver.finish) {
			receiver.handleRightOperand(e.target.value);
			screen.value = receiver.rightOperand;

			console.log(receiver.rightOperand);
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

// TODO: handling 0, ".", 0s after "."
// TODO: commands like "left operand - operator"
// TODO: calculator memory implementation