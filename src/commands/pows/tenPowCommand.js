/* eslint-disable class-methods-use-this */
import Command from '../Command';

class TenPowCommand extends Command {
	execute(currentValue) {
		return 10 ** currentValue;
	}

	undo() {
		return this.value;
	}
}

export default TenPowCommand;