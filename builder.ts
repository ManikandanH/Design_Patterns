class Student {
	private age: number;
	private name: string;
	private email: string;

	constructor() {}

	setAge(age: number) {
		this.age = age;
		return this;
	}

	setName(name: string) {
		this.name = name;
		return this;
	}

	setEmail(email: string) {
		this.email = email;
		return this;
	}
}

new Student().setAge(21).setEmail('mani@gmail.com').setName('Manikandan');
