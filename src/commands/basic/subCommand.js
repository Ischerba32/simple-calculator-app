import Command from '../Command';

class SubtractCommand extends Command {
	execute(currentValue) {
		return currentValue - this.value;
	}

	undo(currentValue) {
		return currentValue + this.value;
	}
}

export default SubtractCommand;