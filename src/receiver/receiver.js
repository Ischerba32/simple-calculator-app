/* eslint-disable no-underscore-dangle */
class Receiver {
	#leftOperand = '';

	#operator = '';

	#rightOperand = '';

	#finish = false;

	get leftOperand() {
		return this.#leftOperand;
	}

	set leftOperand(value) {
		this.#leftOperand = value;
	}

	get operator() {
		return this.#operator;
	}

	set operator(value) {
		this.#operator = value;
	}

	get rightOperand() {
		return this.#rightOperand;
	}

	set rightOperand(value) {
		this.#rightOperand = value;
	}

	get finish() {
		return this.#finish;
	}

	set finish(value) {
		this.#finish = value;
	}
}

export default Receiver;