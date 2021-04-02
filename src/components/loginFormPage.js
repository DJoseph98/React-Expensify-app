import React from 'react';
import { connect } from 'react-redux';
import { startCreateNewUserByEmail, startLoginByEmail } from '../actions/auth';

class LoginFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            error: undefined,
            value: 0,
            userExist: props.userExist
        };
    }
    submitForm = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        this.props.startCreateNewUserByEmail(data).then().catch((e) => {
            this.setState({ error: e.message })
        });
    }
    render() {
        return (
            <form className="form" onSubmit={this.submitForm}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input className="text-input" type="email" name="email" placeholder="Email" required></input>
                <input className="text-input" type="password" name="password" placeholder="Password" required></input>
                {!this.state.userExist && <input className="text-input" type="password" name="password2" placeholder="Password checker" required></input>}
                <button className="button">Create account</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startCreateNewUserByEmail: (data) => dispatch(startCreateNewUserByEmail(data))
});

export default connect(undefined, mapDispatchToProps)(LoginFormPage);