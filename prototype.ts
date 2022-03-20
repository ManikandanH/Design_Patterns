interface CommonFunctions {
	getDetails: () => string;
}
const commonFunctions: CommonFunctions = {
	getDetails() {
		return this.name;
	},
};

const studentDetails = Object.create(commonFunctions, { name: { value: 'Manikandan' } });
const empDetails = Object.create(commonFunctions, { name: { value: 'Arjunan' } });

studentDetails.getDetails();
empDetails.getDetails();