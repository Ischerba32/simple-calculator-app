/* eslint-disable class-methods-use-this */
import Command from '../Command';

class CubeRootCommand extends Command {
	execute(currentValue) {
		if (currentValue < 0) throw new Error('Cube root should have positive operand');
		return currentValue ** (1 / 3);
	}

	undo(currentValue) {
		return currentValue ** 3;
	}
}

export default CubeRootCommand;