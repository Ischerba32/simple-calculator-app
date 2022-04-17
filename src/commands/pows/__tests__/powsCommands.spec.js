/* eslint-disable no-undef */
import Invoker from '../../../invoker/invoker';

const invoker = new Invoker();
const left = '3';
const right = '6';

describe('pows calculator commands', () => {
	beforeEach(() => {
		invoker.handleLeftOperand(left);
		invoker.handleRightOperand(right);
	});
	afterEach(() => {
		invoker.clearCalculator();
	});
	it('square pow command', () => {
		invoker.operator = '^2';
		expect(invoker.execute(true)).toBe(`${(+left) ** 2}`);
	});
	it('cube pow command', () => {
		invoker.operator = '^3';
		expect(invoker.execute(true)).toBe(`${(+left) ** 3}`);
	});
	it('ten pow x command', () => {
		invoker.operator = '10^x';
		expect(invoker.execute(true)).toBe(`${10 ** (+left)}`);
	});
	it('x pow y command', () => {
		invoker.operator = '^y';
		expect(invoker.execute()).toBe(`${(+left) ** (+right)}`);
	});
});