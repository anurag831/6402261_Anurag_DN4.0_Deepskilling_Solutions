const rules = {
	name: "Name should be 5 characters long",
	email: "Email not valid",
	pass: "Password must contain at least 8 characters",
};

export default function validateForm(form) {
	const errors = {};
	if (form.name === "" || form.email === "" || form.pass === "") {
		return {
			name: form.name === "" ? rules.name : null,
			email: form.email === "" ? rules.email : null,
			pass: form.pass === "" ? rules.pass : null,
		};
	}
    
    errors.name = form.name.length < 5 ? rules.name : null;

	const validEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	errors.email = validEmail.test(form.email) ? null : rules.email;

	errors.pass = form.pass.length < 8 ? rules.pass : null;

	return errors;
}
