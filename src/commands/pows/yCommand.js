import Command from '../Command';

class YCommand extends Command {
	execute(currentValue) {
		console.log(`${currentValue}^ ${this.value}`);
		return currentValue ** this.value;
	}
}

export default YCommand;