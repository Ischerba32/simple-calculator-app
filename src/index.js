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

const calculator = new Calculator();

// Testing commands
calculator.executeCommand(new AddCommand(10));
console.log(calculator.value);

calculator.executeCommand(new FactorialCommand());
console.log(calculator.value);

calculator.executeCommand(new MultiplyCommand(2));
console.log(calculator.value);

calculator.executeCommand(new AddCommand(-40));
console.log(calculator.value);

calculator.executeCommand(new InvertSignCommand());
console.log(calculator.value);

calculator.executeCommand(new SqrCommand());
console.log(calculator.value);

calculator.executeCommand(new AddCommand(-300));
console.log(calculator.value);

calculator.executeCommand(new PercentCommand());
console.log(calculator.value);

console.log(calculator);
console.log(calculator.showValue());