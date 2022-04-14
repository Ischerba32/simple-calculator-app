/* eslint-disable no-undef */
import Invoker from '../../../invoker/invoker';

const invoker = new Invoker();
const left = '16';
const right = '4';

describe('roots calculator commands', () => {
	beforeEach(() => {
		invoker.handleLeftOperand(left);
		invoker.handleRightOperand(right);
	});
	afterEach(() => {
		invoker.clearCalculator();
	});
	it('square root command', () => {
		invoker.operator = 'sqrt(x)';
		expect(invoker.execute()).toBe(`${(+left) ** 0.5}`);
	});
	it('cube root command', () => {
		invoker.operator = 'cbrt(x)';
		expect(invoker.execute()).toBe(`${(+left) ** (1 / 3)}`);
	});
	it('y root command', () => {
		invoker.operator = 'yRoot(x)';
		expect(invoker.execute()).toBe(`${(+left) ** (1 / (+right))}`);
	});
});