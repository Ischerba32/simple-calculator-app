class Calculator {
	constructor() {
		this.value = 0;
		this.history = [];
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