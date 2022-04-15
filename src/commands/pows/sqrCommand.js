/* eslint-disable class-methods-use-this */
import Command from '../Command';

class SqrCommand extends Command {
	execute(currentValue) {
		return currentValue ** 2;
	}

	undo(currentValue) {
		return currentValue ** 0.5;
	}
}

export default SqrCommand;