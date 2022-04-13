import Command from '../Command';

class MemoryMinusCommand extends Command {
	execute(currentValue) {
		return currentValue - this.value;
	}
}

export default MemoryMinusCommand;