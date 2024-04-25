'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88dc7cb6.js');
const utils = require('./utils-bcad3386.js');

const loginFormCss = "form{display:flex;flex-direction:column;width:300px}label{margin-bottom:10px}input{padding:8px;margin-top:5px}button{padding:10px;background-color:blue;color:white;border:none;cursor:pointer}button:hover{background-color:darkblue}";
const LoginFormStyle0 = loginFormCss;

const LoginForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loginSuccess = index.createEvent(this, "loginSuccess", 7);
        this.loginError = index.createEvent(this, "loginError", 7);
        this.email = '';
        this.password = '';
    }
    handleEmailChange(event) {
        this.email = event.target.value;
    }
    handlePasswordChange(event) {
        this.password = event.target.value;
    }
    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: this.email, password: this.password })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.loginSuccess.emit(data);
        }
        catch (error) {
            this.loginError.emit(error.message);
        }
    }
    render() {
        return (index.h("form", { key: 'e5a903d5792250499c88ce81d17d5dc8338e7450', onSubmit: (event) => this.handleSubmit(event) }, index.h("label", { key: 'c8f97465aeebe27ab950b730fd65f7b3cf64c6d3' }, "Email:", index.h("input", { key: '8bfda912344a6bb24de5616672edb57045eda665', type: "email", value: this.email, onInput: (event) => this.handleEmailChange(event) })), index.h("label", { key: 'ec2a962bca907d886da105cdf362eb1baa85c858' }, "Password:", index.h("input", { key: '096d95cd5a73ce22df8f31827dc8db156c47b772', type: "password", value: this.password, onInput: (event) => this.handlePasswordChange(event) })), index.h("button", { key: '051f1955b50173b441aa2a9ae0fb2f2d2f76f3c8', type: "submit" }, "Login")));
    }
};
LoginForm.style = LoginFormStyle0;

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return utils.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: '3608fd529e2d32338c4e8b71974e2b5c3bac0968' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = MyComponentStyle0;

exports.login_form = LoginForm;
exports.my_component = MyComponent;

//# sourceMappingURL=login-form_2.cjs.entry.js.map