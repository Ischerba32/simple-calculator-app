/* eslint-disable class-methods-use-this */
import Command from '../Command';

class CubeCommand extends Command {
	execute(currentValue) {
		return currentValue ** 3;
	}
}

export default CubeCommand;