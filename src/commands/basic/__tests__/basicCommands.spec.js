/* eslint-disable no-undef */
import Invoker from '../../../invoker/invoker';

const invoker = new Invoker();
const left = '5';
const right = '10';

describe('basic calculator commands', () => {
	beforeEach(() => {
		invoker.handleLeftOperand(left);
		invoker.handleRightOperand(right);
	});
	afterEach(() => {
		invoker.clearCalculator();
	});
	it('check add command', () => {
		invoker.operator = '+';
		expect(invoker.execute()).toBe(`${+left + +right}`);
	});
	it('check sub command', () => {
		invoker.operator = '-';
		expect(invoker.execute()).toBe(`${+left - +right}`);
	});
	it('check multiply command', () => {
		invoker.operator = '*';
		expect(invoker.execute()).toBe(`${+left * +right}`);
	});
	it('check divide command', () => {
		invoker.operator = '/';
		expect(invoker.execute()).toBe(`${+left / (+right)}`);
	});
	it('check divide by 0', () => {
		invoker.operator = '/';
		invoker.rightOperand = '0';

		expect(invoker.execute()).toBe('divide by 0 error');
	});
});