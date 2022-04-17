/* eslint-disable no-empty */
import Invoker from './invoker/invoker';
import './styles/styles.css';

const digitsButtons = document.querySelectorAll('.digit, .decimal');
const operationsButtons = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign, .decimal, .memory)');
const equalButton = document.querySelector('.equal-sign');
const screen = document.querySelector('.calc-screen .initial');

const operatorValue = document.querySelector('.operator-value');
const memoryValue = document.querySelector('.memory-value span');
const memoryButtons = document.querySelectorAll('.memory');

const toggle = document.getElementById('toggle');

const showHistoryButton = document.querySelector('.show-history');
const historyContainer = document.querySelector('.history-container');
const historyItems = document.getElementsByClassName('history-item');
const historyUndoButton = document.querySelector('.history-undo');

const invoker = new Invoker();

// functions
const pushResultToHistory = ({ operation, equal }) => {
	historyContainer.insertAdjacentHTML('afterbegin', `
		<div class="history-item">
			<p class="history-item-operation">${operation}</p>
			<p class="history-item-value">= ${equal}</p>
		</div>
	`);
};

// handlers
digitsButtons.forEach((digit) => {
	digit.addEventListener('click', () => {
		if (!invoker.operator && !invoker.rightOperand && !invoker.finish) {
			// handle 0 before "."
			if (digit.value === '0' && !invoker.leftOperand.includes('.') && invoker.leftOperand === '0') {
				invoker.leftOperand = digit.value;
				screen.value = invoker.leftOperand;
			} else if (digit.value === '.' && invoker.leftOperand.includes('.')) {

			} else {
				// handle left operator
				if (!invoker.leftOperand && digit.value === '.') {
					invoker.handleLeftOperand(0);
				}
				invoker.handleLeftOperand(digit.value);
				screen.value = invoker.leftOperand;
			}
			// handle left operator after equal
		} else if (invoker.finish) {
			invoker.clearUI();
			invoker.handleLeftOperand(digit.value);
			screen.value = invoker.leftOperand;
		} else if (invoker.operator && !invoker.finish) {
			if (digit.value === '0' && !invoker.rightOperand.includes('.') && invoker.rightOperand === '0') {
				invoker.rightOperand = digit.value;
				screen.value = invoker.rightOperand;
			} else if (digit.value === '.' && invoker.rightOperand.includes('.')) {

			} else {
				// handle right operator
				if (!invoker.rightOperand && digit.value === '.') {
					invoker.handleRightOperand(0);
				}
				invoker.handleRightOperand(digit.value);
				screen.value = invoker.rightOperand;
			}
		}
	});
});

operationsButtons.forEach((operation) => {
	operation.addEventListener('click', () => {
		// clicked basic or extended operation ?
		if (operation.classList.contains('extend-operator')) {
			invoker.operator = operation.value;
			invoker.execute(true);
			if (!invoker.historyObject.error) {
				pushResultToHistory(invoker.historyObject);
				screen.value = invoker.leftOperand;
			} else screen.value = invoker.historyObject.error;
		} else { // clicked basic operation
			// clicked after equal?
			if (invoker.finish) {
				invoker.finish = false;
				invoker.rightOperand = '';
			}
			// clicked AC operation?
			if (operation.value === 'AC') {
				screen.value = invoker.clearCalculator();
				historyContainer.textContent = '';
				operatorValue.textContent = '';
			} else { // clicked basic operation
				// clicked operator when left operator right was entered
				if (invoker.leftOperand && invoker.operator && invoker.rightOperand) {
					invoker.execute();
					if (!invoker.historyObject.error) {
						screen.value = invoker.leftOperand;
						pushResultToHistory(invoker.historyObject);
					} else {
						screen.value = invoker.historyObject.error;
					}
					invoker.operator = operation.value;
					operatorValue.textContent = invoker.operator;
					invoker.finish = false;
					invoker.rightOperand = '';
				}
				invoker.operator = operation.value;
				operatorValue.textContent = invoker.operator;
			}
		}
	});
});

equalButton.addEventListener('click', () => {
	if (!invoker.operator && !invoker.rightOperand) {
		screen.value = invoker.leftOperand || screen.value;
		invoker.finish = true;
	} else {
		if (!invoker.rightOperand) invoker.rightOperand = invoker.leftOperand;
		invoker.execute();
		if (!invoker.historyObject.error) {
			screen.value = invoker.leftOperand;
			pushResultToHistory(invoker.historyObject);
		} else screen.value = invoker.historyObject.error;
	}
	operatorValue.textContent = '';
});

memoryButtons.forEach((memoryBtn) => {
	memoryBtn.addEventListener('click', () => {
		const valueToMemory = screen.value;
		if (memoryBtn.value === 'M+' || memoryBtn.value === 'M-') {
			memoryValue.textContent = invoker.handleMemory(memoryBtn.value, valueToMemory);
		} else if (memoryBtn.value === 'MR') {
			// check in which operator return memory value
			screen.value = invoker.handleMemoryRead(memoryBtn.value);
		} else {
			memoryValue.textContent = invoker.handleMemory(memoryBtn.value);
		}
	});
});

toggle.addEventListener('input', (e) => {
	const isChecked = e.target.checked;

	if (isChecked) {
		document.documentElement.dataset.theme = 'light';
	} else {
		document.documentElement.dataset.theme = 'dark';
	}
});

historyUndoButton.addEventListener('click', () => {
	if (historyItems.length) {
		invoker.undo();
		screen.value = invoker.leftOperand;

		// pop history container
		historyContainer.removeChild(historyItems[0]);
	}
});

showHistoryButton.addEventListener('click', () => {
	const history = document.querySelector('.history');
	history.classList.toggle('visible');
});
