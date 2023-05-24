export const condition = (conditionData) => {
	return {
		get text() {
			return conditionData.text;
		},

		get icon() {
			return conditionData.icon;
		},
	}
}
