/* eslint-disable class-methods-use-this */
import Command from '../Command';

class FactorialCommand extends Command {
	execute(currentValue) {
		return this.factorial(currentValue);
	}

	factorial(n) {
		return n ? n * this.factorial(n - 1) : 1;
	}
}

export default FactorialCommand;