/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import Command from '../Command';

class MemoryClearCommand extends Command {
	execute(currentValue) {
		currentValue = 0;
		return currentValue;
	}
}

export default MemoryClearCommand;