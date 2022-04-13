/* eslint-disable no-undef */
import Receiver from '../../../receiver/receiver';

const receiver = new Receiver();
const value = '16';

describe('memory commands', () => {
	beforeEach(() => {
		receiver.handleLeftOperand(value);
	});
	afterEach(() => {
		receiver.calculator.memory = 0;
	});
	it('m+ memory command', () => {
		const memoryOperation = 'M+';
		expect(receiver.handleMemory(memoryOperation, value)).toBe(+value);
	});
	it('execute m+ memory command at second time', () => {
		const memoryOperation = 'M+';
		receiver.handleMemory(memoryOperation, value);
		expect(receiver.handleMemory(memoryOperation, value)).toBe(+value + +value);
	});
	it('m- memory command', () => {
		const memoryOperation = 'M-';
		expect(receiver.handleMemory(memoryOperation, value)).toBe(-(+value));
	});
	it('execute m- memory command at second time', () => {
		const memoryOperation = 'M-';
		receiver.handleMemory(memoryOperation, value);
		expect(receiver.handleMemory(memoryOperation, value)).toBe(-(+value) - (+value));
	});
	it('memory read command if memory is empty', () => {
		receiver.clearCalculator();
		const memoryOperation = 'MR';
		expect(receiver.handleMemoryRead(memoryOperation)).toBe('0');
	});
	it('memory read command if memory is not empty', () => {
		receiver.clearCalculator();
		const memoryOperation = 'MR';
		expect(receiver.handleMemoryRead(memoryOperation)).toBe(receiver.calculator.memory.toString());
	});
});