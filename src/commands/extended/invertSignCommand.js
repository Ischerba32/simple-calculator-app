/* eslint-disable class-methods-use-this */
import Command from '../Command';

class InvertSignCommand extends Command {
	execute(currentValue) {
		return -currentValue;
	}

	undo(currentValue) {
		return -currentValue;
	}
}

export default InvertSignCommand;