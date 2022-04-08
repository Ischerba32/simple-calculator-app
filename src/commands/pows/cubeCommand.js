/* eslint-disable class-methods-use-this */
import Command from '../Command';

class CubeCommand extends Command {
	execute(currentValue) {
		console.log(`${currentValue}^3`);
		return currentValue ** 3;
	}
}

export default CubeCommand;