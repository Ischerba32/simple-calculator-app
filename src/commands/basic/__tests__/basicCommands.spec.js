/* eslint-disable no-undef */
import Receiver from '../../../receiver/receiver';

const receiver = new Receiver();
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
		expect(receiver.execute()).toBe(`${+left + +right}`);
	});
	it('check sub command', () => {
		receiver.operator = '-';
		expect(receiver.execute()).toBe(`${+left - +right}`);
	});
	it('check multiply command', () => {
		receiver.operator = '*';
		expect(receiver.execute()).toBe(`${+left * +right}`);
	});
	it('check divide command', () => {
		receiver.operator = '/';
		expect(receiver.execute()).toBe(`${+left / (+right)}`);
	});
	it('check divide by 0', () => {
		receiver.operator = '/';
		receiver.rightOperand = '0';

		expect(receiver.execute()).toBeInstanceOf(Error);
	});
});