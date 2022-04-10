import AddCommand from '../commands/basic/addCommand';
import DivideCommand from '../commands/basic/divCommand';
import MultiplyCommand from '../commands/basic/mulCommand';
import SubtractCommand from '../commands/basic/subCommand';
import PercentCommand from '../commands/extends/percentCommand';

const commandsList = {
	'+': AddCommand,
	'-': SubtractCommand,
	'*': MultiplyCommand,
	'/': DivideCommand,
	'%': PercentCommand,
};

export default commandsList;