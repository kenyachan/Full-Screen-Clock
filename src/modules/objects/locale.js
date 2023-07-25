class Locale {
	locationData;

	constructor(locationData) {
		this.locationData = locationData;
	}

	get country() {
		return this.locationData.country;
	}

	get region() {
		return this.locationData.region;
	}

	get name() {
		return this.locationData.name;
	}
}

module.exports = Locale;
