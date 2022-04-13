/* eslint-disable class-methods-use-this */
import Command from '../Command';

class PercentCommand extends Command {
	execute(currentValue) {
		return currentValue / 100;
	}
}

export default PercentCommand;