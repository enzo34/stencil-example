import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'login-form', // Le nom du tag du composant
    styleUrl: 'login-form.css', // Lien vers le fichier de style
    shadow: true // Utilisation du Shadow DOM pour l'encapsulation
})
export class LoginForm {
    @State() email: string = '';
    @State() password: string = '';

    // EventEmitter pour émettre des événements sur succès ou échec
    @Event() loginSuccess: EventEmitter;
    @Event() loginError: EventEmitter;

    private handleEmailChange(event: Event) {
        this.email = (event.target as HTMLInputElement).value;
    }

    private handlePasswordChange(event: Event) {
        this.password = (event.target as HTMLInputElement).value;
    }

    private async handleSubmit(event: Event) {
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
        } catch (error) {
            this.loginError.emit(error.message);
        }
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    Email:
                    <input type="email" value={this.email} onInput={(event) => this.handleEmailChange(event)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.password} onInput={(event) => this.handlePasswordChange(event)} />
                </label>
                <button type="submit">Login</button>
            </form>
        );
    }
}
