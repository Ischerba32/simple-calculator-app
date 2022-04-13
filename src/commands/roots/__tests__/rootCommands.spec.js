/* eslint-disable no-undef */
import Receiver from '../../../receiver/receiver';

const receiver = new Receiver();
const left = '16';
const right = '4';

describe('roots calculator commands', () => {
	beforeEach(() => {
		receiver.handleLeftOperand(left);
		receiver.handleRightOperand(right);
	});
	afterEach(() => {
		receiver.clearCalculator();
	});
	it('square root command', () => {
		receiver.operator = 'sqrt(x)';
		expect(receiver.execute()).toBe((+left) ** 0.5);
	});
	it('cube root command', () => {
		receiver.operator = 'cbrt(x)';
		expect(receiver.execute()).toBe((+left) ** (1 / 3));
	});
	it('y root command', () => {
		receiver.operator = 'yRoot(x)';
		expect(receiver.execute()).toBe((+left) ** (1 / (+right)));
	});
});