import Command from '../Command';

class MultiplyCommand extends Command {
	execute(currentValue) {
		return currentValue * this.value;
	}

	undo(currentValue) {
		return currentValue / this.value;
	}
}

export default MultiplyCommand;