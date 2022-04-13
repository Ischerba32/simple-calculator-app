/* eslint-disable class-methods-use-this */
import Command from '../Command';

class TenPowCommand extends Command {
	execute(currentValue) {
		console.log(`10^${this.value}`);
		return 10 ** currentValue;
	}
}

export default TenPowCommand;