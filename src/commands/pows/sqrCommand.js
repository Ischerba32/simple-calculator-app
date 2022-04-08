/* eslint-disable class-methods-use-this */
import Command from '../Command';

class SqrCommand extends Command {
	execute(currentValue) {
		console.log(`${currentValue}^2`);
		return currentValue ** 2;
	}
}

export default SqrCommand;