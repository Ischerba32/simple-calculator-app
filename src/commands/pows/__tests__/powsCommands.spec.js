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
		invoker.operator = 'x^2';
		expect(invoker.execute()).toBe(`${(+left) ** 2}`);
	});
	it('cube pow command', () => {
		invoker.operator = 'x^3';
		expect(invoker.execute()).toBe(`${(+left) ** 3}`);
	});
	it('ten pow x command', () => {
		invoker.operator = '10^x';
		expect(invoker.execute()).toBe(`${10 ** (+left)}`);
	});
	it('x pow y command', () => {
		invoker.operator = 'x^y';
		expect(invoker.execute()).toBe(`${(+left) ** (+right)}`);
	});
});