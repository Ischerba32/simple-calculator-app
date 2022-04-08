import Command from '../Command';

class MultiplyCommand extends Command {
	execute(currentValue) {
		console.log(`${currentValue} * ${this.value}`);
		return currentValue * this.value;
	}

	undo(currentValue) {
		return currentValue / this.value;
	}
}

export default MultiplyCommand;