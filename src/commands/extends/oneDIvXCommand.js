/* eslint-disable class-methods-use-this */
import Command from '../Command';

class OneDivXCommand extends Command {
	execute(currentValue) {
		console.log(`1/${currentValue}`);
		return currentValue ** (-1);
	}
}

export default OneDivXCommand;