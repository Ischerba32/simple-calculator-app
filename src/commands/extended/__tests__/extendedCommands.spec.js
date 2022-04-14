/* eslint-disable no-undef */
import Invoker from '../../../invoker/invoker';

const invoker = new Invoker();
const left = '5';

describe('Extended calculator commands', () => {
	beforeEach(() => {
		invoker.handleLeftOperand(left);
	});
	afterEach(() => {
		invoker.clearCalculator();
	});
	it('factorial command', () => {
		invoker.operator = 'x!';
		expect(invoker.execute()).toBe('120');
	});
	it('invert sign command (to negative)', () => {
		invoker.operator = '+-';
		expect(invoker.execute()).toBe(`-${left}`);
	});
	it('invert sign command (to positive)', () => {
		invoker.operator = '+-';
		invoker.leftOperand = `-${left}`;
		invoker.calculator.setValue(+invoker.leftOperand);
		expect(invoker.execute()).toBe(left);
	});
	it('1/x command', () => {
		invoker.operator = '1/x';
		expect(invoker.execute()).toBe(`${1 / (+left)}`);
	});
	it('1/x command (divide by 0)', () => {
		invoker.operator = '1/x';
		invoker.leftOperand = '0';
		invoker.calculator.setValue(+invoker.leftOperand);
		expect(invoker.execute()).toBeInstanceOf(Error);
	});
	it('% command', () => {
		invoker.operator = '%';
		expect(invoker.execute()).toBe(`${+left / 100}`);
	});
});