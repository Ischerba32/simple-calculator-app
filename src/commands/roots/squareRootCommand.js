/* eslint-disable class-methods-use-this */
import Command from '../Command';

class SquareRootCommand extends Command {
	execute(currentValue) {
		if (currentValue < 0) throw new Error('Square root should have positive operand');
		return currentValue ** 0.5;
	}
}

export default SquareRootCommand;