import Command from '../Command';

class YCommand extends Command {
	execute(currentValue) {
		return currentValue ** this.value;
	}

	undo(currentValue) {
		return currentValue ** (1 / this.value);
	}
}

export default YCommand;