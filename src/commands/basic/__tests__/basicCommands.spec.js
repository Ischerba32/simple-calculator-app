/* eslint-disable no-undef */
import Calculator from '../../../calculator/index';
import Receiver from '../../../receiver/receiver';

const receiver = new Receiver(new Calculator());
const left = '5';
const right = '10';

describe('basic calculator commands', () => {
	beforeEach(() => {
		receiver.handleLeftOperand(left);
		receiver.handleRightOperand(right);
	});
	afterEach(() => {
		receiver.clearCalculator();
	});
	it('check add command', () => {
		receiver.operator = '+';
		expect(receiver.execute()).toBe(15);
	});
	it('check sub command', () => {
		receiver.operator = '-';
		expect(receiver.execute()).toBe(-5);
	});
	it('check multiply command', () => {
		receiver.operator = '*';
		expect(receiver.execute()).toBe(50);
	});
	it('check divide command', () => {
		receiver.operator = '/';
		expect(receiver.execute()).toBe(0.5);
	});
	it('check divide by 0', () => {
		receiver.operator = '/';
		receiver.rightOperand = '0';

		expect(receiver.execute()).toBeInstanceOf(Error);
	});
});