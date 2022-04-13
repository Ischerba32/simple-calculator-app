import Command from '../Command';

class MemoryPlusCommand extends Command {
	execute(currentValue) {
		return currentValue + this.value;
	}
}

export default MemoryPlusCommand;