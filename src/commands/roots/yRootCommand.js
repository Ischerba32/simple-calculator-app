/* eslint-disable class-methods-use-this */
import Command from '../Command';

class YRootCommand extends Command {
	execute(currentValue) {
		console.log(`n root of${currentValue}`);
		return currentValue ** (1 / this.value);
	}
}

export default YRootCommand;