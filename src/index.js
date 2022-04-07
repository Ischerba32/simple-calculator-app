import AddCommand from './commands/addCommand';
import SubtractCommand from './commands/subCommand';
import MultiplyCommand from './commands/mulCommand';
import DivideCommand from './commands/divCommand';
import Calculator from './calculator';
import './styles/styles.css';

const calculator = new Calculator();

calculator.executeCommand(new AddCommand(10));
console.log(calculator.value);

calculator.executeCommand(new MultiplyCommand(2));
console.log(calculator.value); // 20

console.log(calculator);
