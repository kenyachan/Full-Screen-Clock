class Condition {
	conditionData;

	constructor(conditionData) {
		this.conditionData = conditionData;
	}

	get text() {
		return this.conditionData.text;
	}

	get icon() {
		return this.conditionData.icon;
	}
}

module.exports = Condition;
