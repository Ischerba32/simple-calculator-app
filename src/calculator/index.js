class Calculator {
	constructor() {
		this.value = 0;
		this.history = [];
		this.memory = 0;
	}

	plusMemory(operand) {
		this.memory += operand;
	}

	minusMemory(operand) {
		this.memory -= operand;
	}

	readMemory() {
		return this.memory;
	}

	clearMemory() {
		this.memory = 0;
	}

	executeMemoryCommand(command) {
		this.memory = command.execute(this.memory);
	}

	executeCommand(command) {
		this.value = command.execute(this.value);
		this.history.push(command);
	}

	undo() {
		const command = this.history.pop();
		this.value = command.undo(this.value);
	}

	getValue() {
		return this.value;
	}

	setValue(value) {
		this.value = value;
	}
}

export default Calculator;