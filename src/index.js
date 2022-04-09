import AddCommand from './commands/basic/addCommand';
import SubtractCommand from './commands/basic/subCommand';
import MultiplyCommand from './commands/basic/mulCommand';
import DivideCommand from './commands/basic/divCommand';
import InvertSignCommand from './commands/extends/invertSignCommand';
import SqrCommand from './commands/pows/sqrCommand';
import PercentCommand from './commands/extends/percentCommand';
import FactorialCommand from './commands/extends/factorialCommand';
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

digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
		if (!operator && !rightOperand) {
			leftOperand += e.target.value;
			calculator.setValue(+leftOperand);
			screen.value = leftOperand;
			console.log(leftOperand);
		} else if (leftOperand && rightOperand && finish) {
			finish = false;
			rightOperand = e.target.value;
			screen.value = rightOperand;
			console.log(rightOperand);
		} else {
			rightOperand += e.target.value;
			screen.value = rightOperand;
			console.log(rightOperand);
		}
	});
});

operations.forEach((operation) => {
	operation.addEventListener('click', (e) => {
		operator = operation.value;
		console.log(operator);
	});
});

equal.addEventListener('click', () => {
	if (!rightOperand) rightOperand = leftOperand;
	switch (operator) {
	case '+':
		calculator.executeCommand(new AddCommand(+(rightOperand)));
		console.log(`${leftOperand} ${operator} ${rightOperand} = ${calculator.getValue()}`);
		leftOperand = calculator.getValue();
		screen.value = leftOperand;
		break;
	case '-':
		calculator.executeCommand(new SubtractCommand(+(rightOperand)));
		console.log(`${leftOperand} ${operator} ${rightOperand} = ${calculator.getValue()}`);
		leftOperand = calculator.getValue();
		screen.value = leftOperand;
		break;
	case '*':
		calculator.executeCommand(new MultiplyCommand(+(rightOperand)));
		console.log(`${leftOperand} ${operator} ${rightOperand} = ${calculator.getValue()}`);
		leftOperand = calculator.getValue();
		screen.value = leftOperand;
		break;
	case '/':
		if (rightOperand === '0') {
			screen.value = 'Error';
			operator = '';
			rightOperand = '';
			leftOperand = '';
			calculator.setValue(0);
		} else {
			calculator.executeCommand(new DivideCommand(+(rightOperand)));
			console.log(`${leftOperand} ${operator} ${rightOperand} = ${calculator.getValue()}`);
			leftOperand = calculator.getValue();
			screen.value = leftOperand;
		}
		break;
	default:
		break;
	}
	finish = true;
	// сделать так чтобы после завершения операции при наборе новой цифры все начиналось заново
	// при этом если повторно нажать на = то вычисления должны продолжаться
});

// Testing commands
// calculator.executeCommand(new AddCommand(10));
// console.log(calculator.value);

// calculator.executeCommand(new FactorialCommand());
// console.log(calculator.value);

// calculator.executeCommand(new MultiplyCommand(2));
// console.log(calculator.value);

// calculator.executeCommand(new AddCommand(-40));
// console.log(calculator.value);

// calculator.executeCommand(new InvertSignCommand());
// console.log(calculator.value);

// calculator.executeCommand(new SqrCommand());
// console.log(calculator.value);

// calculator.executeCommand(new AddCommand(-300));
// console.log(calculator.value);

// calculator.executeCommand(new PercentCommand());
// console.log(calculator.value);

// console.log(calculator);
// console.log(calculator.showValue());