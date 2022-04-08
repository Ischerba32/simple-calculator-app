/* eslint-disable class-methods-use-this */
import Command from '../Command';

class CubeRootCommand extends Command {
	execute(currentValue) {
		console.log(`Cube root of ${currentValue}`);
		return currentValue ** (1 / 3);
	}
}

export default CubeRootCommand;