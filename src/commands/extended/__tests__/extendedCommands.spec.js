/* eslint-disable no-undef */
import Receiver from '../../../receiver/receiver';

const receiver = new Receiver();
const left = '5';

describe('Extended calculator commands', () => {
	beforeEach(() => {
		receiver.handleLeftOperand(left);
	});
	afterEach(() => {
		receiver.clearCalculator();
	});
	it('factorial command', () => {
		receiver.operator = 'x!';
		expect(receiver.execute()).toBe('120');
	});
	it('invert sign command (to negative)', () => {
		receiver.operator = '+-';
		expect(receiver.execute()).toBe(`-${left}`);
	});
	it('invert sign command (to positive)', () => {
		receiver.operator = '+-';
		receiver.leftOperand = `-${left}`;
		receiver.calculator.setValue(+receiver.leftOperand);
		expect(receiver.execute()).toBe(left);
	});
	it('1/x command', () => {
		receiver.operator = '1/x';
		expect(receiver.execute()).toBe(`${1 / (+left)}`);
	});
	it('1/x command (divide by 0)', () => {
		receiver.operator = '1/x';
		receiver.leftOperand = '0';
		receiver.calculator.setValue(+receiver.leftOperand);
		expect(receiver.execute()).toBeInstanceOf(Error);
	});
	it('% command', () => {
		receiver.operator = '%';
		expect(receiver.execute()).toBe(`${+left / 100}`);
	});
});