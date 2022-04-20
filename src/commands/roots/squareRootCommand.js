/* eslint-disable class-methods-use-this */
import Command from '../Command';

class SquareRootCommand extends Command {
	execute(currentValue) {
		if (currentValue < 0) throw new Error('Bad operand');
		return currentValue ** 0.5;
	}

	undo(currentValue) {
		return currentValue ** 2;
	}
}

export default SquareRootCommand;