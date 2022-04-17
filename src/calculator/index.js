class Calculator {
	// constructor() {
	#value = 0;

	#history = [];

	#memory = 0;
	// }

	get value() {
		return this.#value;
	}

	set value(value) {
		this.#value = value;
	}

	get history() {
		return this.#history;
	}

	set history(value) {
		this.#history = value;
	}

	get memory() {
		return this.#memory;
	}

	set memory(value) {
		this.#memory = value;
	}

	executeMemoryCommand(command) {
		this.memory = command.execute(this.memory);
	}

	executeCommand(command) {
		this.value = command.execute(this.value);
		this.history.push(command);
	}

	undo() {
		if (this.history.length) {
			const command = this.history.pop();
			this.value = command.undo(this.value);
		} else this.value = 0;
	}

	clearHistory() {
		this.history = [];
	}
}

export default Calculator;