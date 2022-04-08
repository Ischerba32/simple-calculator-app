/* eslint-disable class-methods-use-this */
import Command from '../Command';

class InvertSignCommand extends Command {
	execute(currentValue) {
		console.log(`Invertion ${currentValue}`);
		return -currentValue;
	}
}

export default InvertSignCommand;