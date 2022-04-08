import Command from '../Command';

class DivideCommand extends Command {
	execute(currentValue) {
		console.log(`${currentValue} / ${this.value}`);
		return currentValue / this.value;
	}

	undo(currentValue) {
		console.log(`${currentValue} * ${this.value}`);
		return currentValue * this.value;
	}
}

export default DivideCommand;