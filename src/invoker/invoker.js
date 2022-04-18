import Calculator from '../calculator';
import CommandsFactory from '../factory/commandsFactory';

class Invoker {
	#leftOperand = '';

	#operator = '';

	#rightOperand = '';

	#finish = false;

	#historyObject = {};

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

	get historyObject() {
		return this.#historyObject;
	}

	set historyObject(value) {
		this.#historyObject = value;
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
		this.calculator.clearHistory();
		this.calculator.value = 0;
		return this.calculator.value;
	}

	handleLeftOperand(value) {
		if (this.finish) {
			this.leftOperand = value;
		} else {
			this.leftOperand += value;
		}
		this.calculator.value = +this.leftOperand;
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

	resultToCorrectFormat() {
		return +((this.calculator.value).toFixed(4));
	}

	execute(isExtendedCommand = false) {
		const command = isExtendedCommand
			? this.factory.create(this.operator, +this.leftOperand)
			: this.factory.create(this.operator, +this.rightOperand);
		this.#historyObject = {};
		try {
			this.calculator.executeCommand(command);
			this.historyObject.operation = `${this.leftOperand} ${this.operator} ${this.rightOperand}`;
			this.historyObject.equal = this.resultToCorrectFormat();
			this.finish = true;
			this.leftOperand = this.resultToCorrectFormat().toString();
			return this.leftOperand;
		} catch (error) {
			this.clearUI();
			this.historyObject.error = error.message;
			return this.historyObject.error;
		}
	}

	undo() {
		this.calculator.undo();
		this.clearUI();
		this.leftOperand = this.resultToCorrectFormat().toString();
	}
}

export default Invoker;