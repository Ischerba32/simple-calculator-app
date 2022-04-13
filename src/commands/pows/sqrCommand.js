/* eslint-disable class-methods-use-this */
import Command from '../Command';

class SqrCommand extends Command {
	execute(currentValue) {
		return currentValue ** 2;
	}
}

export default SqrCommand;