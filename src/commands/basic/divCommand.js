import Command from '../Command';

class DivideCommand extends Command {
	execute(currentValue) {
		if (this.value === 0) throw new Error('divide by 0 error');
		return currentValue / this.value;
	}

	undo(currentValue) {
		return currentValue * this.value;
	}
}

export default DivideCommand;