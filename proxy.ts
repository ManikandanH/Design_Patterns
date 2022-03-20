interface StudentDetails {
	name: string;
	age: number;
	email: string;
}

const studentDetails: StudentDetails = {
	name: 'Manikandan',
	age: 21,
	email: 'mani@gmail.com',
};

const a = new Proxy(studentDetails, {
	get(target, key, value) {
		return target[key];
	},
	set(target, key, value) {
		if (key === 'age') {
			console.log('Age cannot be changed');
			return false;
		}
		target[key] = value;

		return true;
	},
});

a.age = 22;
console.log(a)
a.name = 'Arjunan'
console.log(a)
