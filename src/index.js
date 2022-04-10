import CommandsFactory from './factory/commandsFactory';
import Calculator from './calculator';
import './styles/styles.css';

const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign)');
const equal = document.querySelector('.equal-sign');
const screen = document.querySelector('.calc-screen .initial');
console.log(screen);
let leftOperand = '';
let operator = '';
let rightOperand = '';
let finish = false;

const calculator = new Calculator();
const factory = new CommandsFactory();

digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
		if (!operator && !rightOperand && !finish) {
			leftOperand += e.target.value;
			calculator.setValue(+leftOperand);
			screen.value = leftOperand;
			console.log(leftOperand);
		} else if (leftOperand && rightOperand && finish) {
			finish = false;
			leftOperand = e.target.value;
			screen.value = leftOperand;
			rightOperand = '';
			operator = '';
			// console.log(rightOperand);
		} else if (operator && !finish) {
			rightOperand += e.target.value;
			screen.value = rightOperand;
			console.log(rightOperand);
		}
	});
});

operations.forEach((operation) => {
	operation.addEventListener('click', (e) => {
		if (finish) {
			finish = false;
			rightOperand = '';
		}

		if (operation.value === 'AC') {
			calculator.setValue(0);
			screen.value = calculator.getValue();
			leftOperand = '';
			rightOperand = '';
			operator = '';
			finish = false;

			console.log(calculator);
		} else {
			operator = operation.value;
			console.log(operator);
		}
	});
});

equal.addEventListener('click', () => {
	if (!rightOperand) rightOperand = leftOperand;
	const command = factory.create(operator, +rightOperand);
	console.log(command);
	try {
		calculator.executeCommand(command);
		console.log(`${leftOperand} ${operator} ${rightOperand} = ${calculator.getValue()}`);
		leftOperand = calculator.getValue();
		screen.value = leftOperand;
	} catch (error) {
		screen.value = error;
		operator = '';
		rightOperand = '';
		leftOperand = '';
		calculator.setValue(0);
	}

	console.log(calculator);

	finish = true;
});