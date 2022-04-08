import Command from '../Command';

class SubtractCommand extends Command {
	execute(currentValue) {
		console.log(`${currentValue} - ${this.value}`);
		return currentValue - this.value;
	}

	undo(currentValue) {
		console.log(`${currentValue} + ${this.value}`);
		return currentValue + this.value;
	}
}

export default SubtractCommand;