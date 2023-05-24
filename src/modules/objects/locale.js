export const locale = (locationData) => {
	return {
		get country() {
			return locationData.country;
		},

		get region() {
			return locationData.region;
		},

		get name() {
			return locationData.name;
		},
	}
}
