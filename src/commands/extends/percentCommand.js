/* eslint-disable class-methods-use-this */
import Command from '../Command';

class PercentCommand extends Command {
	execute(currentValue) {
		console.log(`${currentValue}%`);
		return currentValue / 100;
	}
}

export default PercentCommand;