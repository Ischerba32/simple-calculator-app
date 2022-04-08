/* eslint-disable class-methods-use-this */
import Command from '../Command';

class SquareRootCommand extends Command {
	execute(currentValue) {
		console.log(`Square root of ${currentValue}`);
		return currentValue ** 0.5;
	}
}

export default SquareRootCommand;