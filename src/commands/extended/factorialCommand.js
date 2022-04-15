/* eslint-disable class-methods-use-this */
import Command from '../Command';

class FactorialCommand extends Command {
	execute(currentValue) {
		return this.factorial(currentValue);
	}

	undo() {
		return this.value;
	}

	factorial(n) {
		if (n < 0) throw new Error('Bad operator');
		return n ? n * this.factorial(n - 1) : 1;
	}
}

export default FactorialCommand;