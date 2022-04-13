/* eslint-disable no-undef */
import Calculator from '../../../calculator/index';
import Receiver from '../../../receiver/receiver';

const receiver = new Receiver(new Calculator());
const left = '3';
const right = '6';

describe('pows calculator commands', () => {
	beforeEach(() => {
		receiver.handleLeftOperand(left);
		receiver.handleRightOperand(right);
	});
	afterEach(() => {
		receiver.clearCalculator();
	});
	it('square pow command', () => {
		receiver.operator = 'x^2';
		expect(receiver.execute()).toBe((+left) ** 2);
	});
	it('cube pow command', () => {
		receiver.operator = 'x^3';
		expect(receiver.execute()).toBe((+left) ** 3);
	});
	it('ten pow x command', () => {
		receiver.operator = '10^x';
		expect(receiver.execute()).toBe(10 ** (+left));
	});
	it('x pow y command', () => {
		receiver.operator = 'x^y';
		expect(receiver.execute()).toBe((+left) ** (+right));
	});
});