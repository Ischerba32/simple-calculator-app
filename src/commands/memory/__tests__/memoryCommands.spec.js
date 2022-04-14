/* eslint-disable no-undef */
import Invoker from '../../../invoker/invoker';

const invoker = new Invoker();
const value = '16';

describe('memory commands', () => {
	beforeEach(() => {
		invoker.handleLeftOperand(value);
	});
	afterEach(() => {
		invoker.calculator.memory = 0;
	});
	it('m+ memory command', () => {
		const memoryOperation = 'M+';
		expect(invoker.handleMemory(memoryOperation, value)).toBe(+value);
	});
	it('execute m+ memory command at second time', () => {
		const memoryOperation = 'M+';
		invoker.handleMemory(memoryOperation, value);
		expect(invoker.handleMemory(memoryOperation, value)).toBe(+value + +value);
	});
	it('m- memory command', () => {
		const memoryOperation = 'M-';
		expect(invoker.handleMemory(memoryOperation, value)).toBe(-(+value));
	});
	it('execute m- memory command at second time', () => {
		const memoryOperation = 'M-';
		invoker.handleMemory(memoryOperation, value);
		expect(invoker.handleMemory(memoryOperation, value)).toBe(-(+value) - (+value));
	});
	it('memory read command if memory is empty', () => {
		invoker.clearCalculator();
		const memoryOperation = 'MR';
		expect(invoker.handleMemoryRead(memoryOperation)).toBe('0');
	});
	it('memory read command if memory is not empty', () => {
		invoker.clearCalculator();
		const memoryOperation = 'MR';
		expect(invoker.handleMemoryRead(memoryOperation)).toBe(invoker.calculator.memory.toString());
	});
});