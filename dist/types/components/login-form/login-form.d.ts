import { EventEmitter } from '../../stencil-public-runtime';
export declare class LoginForm {
    email: string;
    password: string;
    loginSuccess: EventEmitter;
    loginError: EventEmitter;
    private handleEmailChange;
    private handlePasswordChange;
    private handleSubmit;
    render(): any;
}
