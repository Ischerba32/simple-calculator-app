import Command from '../Command';

class YCommand extends Command {
	execute(currentValue) {
		return currentValue ** this.value;
	}
}

export default YCommand;