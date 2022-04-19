import React from 'react';
import { Link } from 'react-router-dom';
function Signup() {
	return (
		<div>
			<div class="u-margin-bottom-medium"></div>
			<div class="login-reg">
				<div class="login-cont">
					<div class="reg-log">
						<Link to="/login" class="reg-log-toggle">
							<h3 class="heading-5 bold-2"> Login </h3>
						</Link>
						<p class="p-lg">/</p>
						<Link to="/signup" class="reg-log-toggle">
							<h3 class="heading-5 bold-2">
								<span class="color-primary">Register</span>
							</h3>
						</Link>
					</div>
					<form class="login-form" action="">
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

							<label class="input-labels" for="uname">
								<b>First Name</b>
							</label>
							<input
								class="login-fields "
								type="text"
								placeholder="Enter Username"
								name="uname"
								required
							/>

							<label class="input-labels" for="uname">
								<b>Last Name</b>
							</label>
							<input
								class="login-fields "
								type="text"
								placeholder="Enter Username"
								name="uname"
								required
							/>

							<label class="input-labels" for="psw">
								<b>New Password</b>
							</label>
							<input
								class="login-fields"
								type="password"
								placeholder="Enter Password"
								name="psw"
								required
							/>

							<label class="input-labels" for="psw">
								<b>Re-Enter Password</b>
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
							<Link to="/signup" class="btn-3 btn-primary btn-md">
								Register
							</Link>
							<Link to="/login" class="btn btn-link btn-sm">
								Already a user? Login here
							</Link>
						</div>
					</form>
				</div>
			</div>
			<div class="u-margin-bottom-medium"></div>
		</div>
	);
}

export default Signup;
