import AddCommand from '../commands/basic/addCommand';
import DivideCommand from '../commands/basic/divCommand';
import MultiplyCommand from '../commands/basic/mulCommand';
import SubtractCommand from '../commands/basic/subCommand';
import PercentCommand from '../commands/extended/percentCommand';
import YCommand from '../commands/pows/yCommand';
import YRootCommand from '../commands/roots/yRootCommand';
import InvertSignCommand from '../commands/extended/invertSignCommand';
import SqrCommand from '../commands/pows/sqrCommand';
import CubeCommand from '../commands/pows/cubeCommand';
import TenPowCommand from '../commands/pows/tenPowCommand';
import OneDivXCommand from '../commands/extended/oneDIvXCommand';
import FactorialCommand from '../commands/extended/factorialCommand';
import SquareRootCommand from '../commands/roots/squareRootCommand';
import CubeRootCommand from '../commands/roots/cubeRootCommand';

import MemoryPlusCommand from '../commands/memory/memoryPlusCommand';
import MemoryMinusCommand from '../commands/memory/memoryMinusCommand';
import MemoryReadCommand from '../commands/memory/memoryReadCommand';
import MemoryClearCommand from '../commands/memory/memoryClearCommand';

const commandsList = {
	'+': AddCommand,
	'-': SubtractCommand,
	'*': MultiplyCommand,
	'/': DivideCommand,
	'^y': YCommand,
	'yRoot(x)': YRootCommand,
	'%': PercentCommand,
	'+-': InvertSignCommand,
	'^2': SqrCommand,
	'^3': CubeCommand,
	'10^x': TenPowCommand,
	'1/x': OneDivXCommand,
	'!': FactorialCommand,
	'^(1/2)': SquareRootCommand,
	'^(1/3)': CubeRootCommand,
	'M+': MemoryPlusCommand,
	'M-': MemoryMinusCommand,
	MR: MemoryReadCommand,
	MC: MemoryClearCommand,
};

export default commandsList;