/* eslint-disable class-methods-use-this */
import Command from '../Command';

class YRootCommand extends Command {
	execute(currentValue) {
		if (currentValue < 0) throw new Error('Y root should have positive operand');
		return currentValue ** (1 / this.value);
	}

	undo(currentValue) {
		return currentValue ** this.value;
	}
}

export default YRootCommand;