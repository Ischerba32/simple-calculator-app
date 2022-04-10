import AddCommand from '../commands/basic/addCommand';
import DivideCommand from '../commands/basic/divCommand';
import MultiplyCommand from '../commands/basic/mulCommand';
import SubtractCommand from '../commands/basic/subCommand';
import PercentCommand from '../commands/extends/percentCommand';
import YCommand from '../commands/pows/yCommand';
import YRootCommand from '../commands/roots/yRootCommand';

const commandsList = {
	'+': AddCommand,
	'-': SubtractCommand,
	'*': MultiplyCommand,
	'/': DivideCommand,
	'x^y': YCommand,
	'yRoot(x)': YRootCommand,
	'%': PercentCommand,
};

export default commandsList;