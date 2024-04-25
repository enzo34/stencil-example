import type { Components, JSX } from "../types/components";

interface LoginForm extends Components.LoginForm, HTMLElement {}
export const LoginForm: {
    prototype: LoginForm;
    new (): LoginForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
