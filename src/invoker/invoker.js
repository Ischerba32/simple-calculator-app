import Calculator from '../calculator';
import CommandsFactory from '../factory/commandsFactory';

class Invoker {
	#leftOperand = '';

	#operator = '';

	#rightOperand = '';

	#finish = false;

	#factory = new CommandsFactory();

	#calculator = new Calculator();

	get leftOperand() {
		return this.#leftOperand;
	}

	set leftOperand(value) {
		this.#leftOperand = value;
	}

	get operator() {
		return this.#operator;
	}

	set operator(value) {
		this.#operator = value;
	}

	get rightOperand() {
		return this.#rightOperand;
	}

	set rightOperand(value) {
		this.#rightOperand = value;
	}

	get finish() {
		return this.#finish;
	}

	set finish(value) {
		this.#finish = value;
	}

	get factory() {
		return this.#factory;
	}

	get calculator() {
		return this.#calculator;
	}

	set calculator(calc) {
		this.#calculator = calc;
	}

	clearUI() {
		this.leftOperand = '';
		this.operator = '';
		this.rightOperand = '';
		this.finish = false;
	}

	clearCalculator() {
		this.clearUI();
		this.calculator.setValue(0);
		return this.calculator.getValue();
	}

	handleLeftOperand(value) {
		if (this.finish) {
			this.leftOperand = value;
		} else {
			this.leftOperand += value;
		}
		this.calculator.setValue(+this.leftOperand);
	}

	handleRightOperand(value) {
		this.rightOperand += value;
	}

	handleMemory(operation, value = '') {
		const command = this.factory.create(operation, +value);
		this.calculator.executeMemoryCommand(command);
		return this.calculator.memory;
	}

	// eslint-disable-next-line consistent-return
	handleMemoryRead(btnValue) {
		if (!this.operator) {
			this.finish = true;
			this.handleLeftOperand(this.handleMemory(btnValue).toString());
			return this.leftOperand;
		}
		if (!this.rightOperand) {
			this.rightOperand = this.handleMemory(btnValue).toString();
			return this.rightOperand;
		}
	}

	execute() {
		const command = this.factory.create(this.operator, +this.rightOperand);
		try {
			this.calculator.executeCommand(command);

			// console.log(`${this.leftOperand} ${this.operator} ${this.rightOperand} = ${this.calculator.getValue()}`);
			this.finish = true;
			this.leftOperand = this.calculator.getValue().toString();
			return this.leftOperand;
		} catch (error) {
			this.clearCalculator();
			return error;
		}
	}
}

export default Invoker;