/* eslint-disable class-methods-use-this */
class Command {
	constructor(value) {
		this.value = value;
	}

	execute(value) {
		throw new Error('Method is not implemented');
	}

	undo(value) {
		throw new Error('Method is not implemented');
	}
}

export default Command;