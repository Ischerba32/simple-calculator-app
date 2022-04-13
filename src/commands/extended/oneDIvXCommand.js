/* eslint-disable class-methods-use-this */
import Command from '../Command';

class OneDivXCommand extends Command {
	execute(currentValue) {
		if (currentValue === 0) throw new Error('divide by 0 error');
		return currentValue ** (-1);
	}
}

export default OneDivXCommand;