import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
function Login() {
	return (
		<div>
			<Navbar />
			<div class="u-margin-bottom-medium"></div>
			<div class="login-reg">
				<div class="login-cont">
					<div class="reg-log">
						<a href="./login.html" class="reg-log-toggle">
							<h3 class="heading-5 bold-2">
								{' '}
								<span class="color-primary">Login</span>{' '}
							</h3>
						</a>
						<p class="p-lg">/</p>
						<Link to="/signup" class="reg-log-toggle">
							<h3 class="heading-5 bold-2">Register</h3>
						</Link>
					</div>
					<form class="login-form">
						<div class="login-input">
							<label class="input-labels" for="uname">
								<b>Email</b>
							</label>
							<input
								class="login-fields "
								type="text"
								placeholder="Enter Username"
								name="uname"
								required
							/>

							<label class="input-labels" for="psw">
								<b>Password</b>
							</label>
							<input
								class="login-fields"
								type="password"
								placeholder="Enter Password"
								name="psw"
								required
							/>
						</div>
						<div class="u-margin-bottom-small"></div>
						<div class="login-btns">
							<a href="" class="btn-3 btn-primary btn-md">
								Login
							</a>
							<a href="" class="btn btn-link btn-sm">
								Forgot password?
							</a>
						</div>
					</form>
				</div>
			</div>
			<div class="u-margin-bottom-medium"></div>
			<Footer />
		</div>
	);
}

export default Login;
