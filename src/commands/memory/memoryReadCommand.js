/* eslint-disable class-methods-use-this */
import Command from '../Command';

class MemoryReadCommand extends Command {
	execute(currentValue) {
		return currentValue;
	}
}

export default MemoryReadCommand;