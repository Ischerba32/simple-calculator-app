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
		invoker.operator = '!';
		expect(invoker.execute(true)).toBe('120');
	});
	it('invert sign command (to negative)', () => {
		invoker.operator = '+-';
		expect(invoker.execute(true)).toBe(`-${left}`);
	});
	it('invert sign command (to positive)', () => {
		invoker.operator = '+-';
		invoker.leftOperand = `-${left}`;
		invoker.calculator.value = +invoker.leftOperand;
		expect(invoker.execute(true)).toBe(left);
	});
	it('1/x command', () => {
		invoker.operator = '1/x';
		expect(invoker.execute(true)).toBe(`${1 / (+left)}`);
	});
	it('1/x command (divide by 0)', () => {
		invoker.operator = '1/x';
		invoker.leftOperand = '0';
		invoker.calculator.value = +invoker.leftOperand;
		expect(invoker.execute(true)).toBe('divide by 0 error');
	});
	it('% command', () => {
		invoker.operator = '%';
		expect(invoker.execute(true)).toBe(`${+left / 100}`);
	});
});