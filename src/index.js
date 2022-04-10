import CommandsFactory from './factory/commandsFactory';
import Calculator from './calculator';
import Receiver from './receiver/receiver';
import './styles/styles.css';

const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign)');
const equal = document.querySelector('.equal-sign');
const screen = document.querySelector('.calc-screen .initial');
console.log(screen);

const calculator = new Calculator();
const factory = new CommandsFactory();
const receiver = new Receiver();

digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
		if (!receiver.operator && !receiver.rightOperand && !receiver.finish) {
			receiver.leftOperand += e.target.value;
			calculator.setValue(+receiver.leftOperand);
			screen.value = receiver.leftOperand;
			console.log(receiver.leftOperand);
		} else if (receiver.leftOperand && receiver.rightOperand && receiver.finish) {
			receiver.clean();
			receiver.leftOperand = e.target.value;
			calculator.setValue(+receiver.leftOperand);
			screen.value = receiver.leftOperand;
		} else if (receiver.operator && !receiver.finish) {
			receiver.rightOperand += e.target.value;
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
			calculator.setValue(0);
			screen.value = calculator.getValue();
			receiver.clean();
			console.log(calculator);
		} else {
			receiver.operator = operation.value;
			console.log(receiver.operator);
		}
	});
});

equal.addEventListener('click', () => {
	if (!receiver.rightOperand) receiver.rightOperand = receiver.leftOperand;
	const command = factory.create(receiver.operator, +receiver.rightOperand);
	console.log(command);
	try {
		calculator.executeCommand(command);
		console.log(`${receiver.leftOperand} ${receiver.operator} ${receiver.rightOperand} = ${calculator.getValue()}`);
		receiver.leftOperand = calculator.getValue();
		screen.value = receiver.leftOperand;
	} catch (error) {
		screen.value = error;

		receiver.clean();
		calculator.setValue(0);
	}

	console.log(calculator);
	receiver.finish = true;
});