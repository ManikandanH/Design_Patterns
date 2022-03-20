class SignupForm {}

class LoginForm {}

class FormFactory {
	public formInstance(formType: 'login' | 'signup'): SignupForm | LoginForm {
		if (formType === 'login') {
			return new LoginForm();
		}
		return new SignupForm();
	}
}

const form = new FormFactory();
form.formInstance('login');
