import Command from '../Command';

class DivideCommand extends Command {
	execute(currentValue) {
		if (this.value === 0) throw new Error('divide by 0 error');
		console.log(`${currentValue} / ${this.value}`);
		return currentValue / this.value;
	}

	undo(currentValue) {
		console.log(`${currentValue} * ${this.value}`);
		return currentValue * this.value;
	}
}

export default DivideCommand;