/* eslint-disable class-methods-use-this */
import commandsList from '../helpers/commandList';

class CommandsFactory {
	create(type, value = 0) {
		const Command = commandsList[type];
		return new Command(value);
	}
}

export default CommandsFactory;