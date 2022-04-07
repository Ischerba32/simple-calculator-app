class MultiplyCommand {
	constructor(value) {
		this.value = value;
	}

	execute(currentValue) {
		console.log(`${currentValue} * ${this.value}`);
		return currentValue * this.value;
	}

	undo(currentValue) {
		return currentValue / this.value;
	}
}

export default MultiplyCommand;