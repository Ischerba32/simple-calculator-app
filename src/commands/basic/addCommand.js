import Command from '../Command';

class AddCommand extends Command {
	execute(currentValue) {
		return currentValue + this.value;
	}

	undo(currentValue) {
		return currentValue - this.value;
	}
}

export default AddCommand;