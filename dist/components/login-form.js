import { p as proxyCustomElement, H, c as createEvent, h } from './p-621773cf.js';

const loginFormCss = "form{display:flex;flex-direction:column;width:300px}label{margin-bottom:10px}input{padding:8px;margin-top:5px}button{padding:10px;background-color:blue;color:white;border:none;cursor:pointer}button:hover{background-color:darkblue}";
const LoginFormStyle0 = loginFormCss;

const LoginForm$1 = /*@__PURE__*/ proxyCustomElement(class LoginForm extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.loginSuccess = createEvent(this, "loginSuccess", 7);
        this.loginError = createEvent(this, "loginError", 7);
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
        return (h("form", { key: 'e5a903d5792250499c88ce81d17d5dc8338e7450', onSubmit: (event) => this.handleSubmit(event) }, h("label", { key: 'c8f97465aeebe27ab950b730fd65f7b3cf64c6d3' }, "Email:", h("input", { key: '8bfda912344a6bb24de5616672edb57045eda665', type: "email", value: this.email, onInput: (event) => this.handleEmailChange(event) })), h("label", { key: 'ec2a962bca907d886da105cdf362eb1baa85c858' }, "Password:", h("input", { key: '096d95cd5a73ce22df8f31827dc8db156c47b772', type: "password", value: this.password, onInput: (event) => this.handlePasswordChange(event) })), h("button", { key: '051f1955b50173b441aa2a9ae0fb2f2d2f76f3c8', type: "submit" }, "Login")));
    }
    static get style() { return LoginFormStyle0; }
}, [1, "login-form", {
        "email": [32],
        "password": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["login-form"];
    components.forEach(tagName => { switch (tagName) {
        case "login-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LoginForm$1);
            }
            break;
    } });
}
defineCustomElement$1();

const LoginForm = LoginForm$1;
const defineCustomElement = defineCustomElement$1;

export { LoginForm, defineCustomElement };

//# sourceMappingURL=login-form.js.map