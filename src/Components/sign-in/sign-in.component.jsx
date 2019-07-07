import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account!</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						name="email"
						label="email"
						required
					/>
					<FormInput
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						name="password"
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
