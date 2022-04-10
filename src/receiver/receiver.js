import Calculator from '../calculator';
import CommandsFactory from '../factory/commandsFactory';

class Receiver {
	#leftOperand = '';

	#operator = '';

	#rightOperand = '';

	#finish = false;

	#factory = new CommandsFactory();

	constructor(calculator) {
		this.calculator = calculator;
	}

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

	execute() {
		const command = this.factory.create(this.operator, +this.rightOperand);
		try {
			this.calculator.executeCommand(command);

			console.log(`${this.leftOperand} ${this.operator} ${this.rightOperand} = ${this.calculator.getValue()}`);

			this.leftOperand = this.calculator.getValue();
			this.finish = true;
			return this.leftOperand;
		} catch (error) {
			this.clearCalculator();
			return error;
		}
	}
}

export default Receiver;