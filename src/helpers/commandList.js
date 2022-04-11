import AddCommand from '../commands/basic/addCommand';
import DivideCommand from '../commands/basic/divCommand';
import MultiplyCommand from '../commands/basic/mulCommand';
import SubtractCommand from '../commands/basic/subCommand';
import PercentCommand from '../commands/extends/percentCommand';
import YCommand from '../commands/pows/yCommand';
import YRootCommand from '../commands/roots/yRootCommand';
import InvertSignCommand from '../commands/extends/invertSignCommand';
import SqrCommand from '../commands/pows/sqrCommand';
import CubeCommand from '../commands/pows/cubeCommand';
import TenPowCommand from '../commands/pows/tenPowCommand';
import OneDivXCommand from '../commands/extends/oneDIvXCommand';
import FactorialCommand from '../commands/extends/factorialCommand';
import SquareRootCommand from '../commands/roots/squareRootCommand';
import CubeRootCommand from '../commands/roots/cubeRootCommand';

const commandsList = {
	'+': AddCommand,
	'-': SubtractCommand,
	'*': MultiplyCommand,
	'/': DivideCommand,
	'x^y': YCommand,
	'yRoot(x)': YRootCommand,
	'%': PercentCommand,
	'+-': InvertSignCommand,
	'x^2': SqrCommand,
	'x^3': CubeCommand,
	'10^x': TenPowCommand,
	'1/x': OneDivXCommand,
	'x!': FactorialCommand,
	'sqrt(x)': SquareRootCommand,
	'cbrt(x)': CubeRootCommand,
};

export default commandsList;