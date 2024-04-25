import { h } from "@stencil/core";
export class LoginForm {
    constructor() {
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
    static get is() { return "login-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["login-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["login-form.css"]
        };
    }
    static get states() {
        return {
            "email": {},
            "password": {}
        };
    }
    static get events() {
        return [{
                "method": "loginSuccess",
                "name": "loginSuccess",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "loginError",
                "name": "loginError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=login-form.js.map
