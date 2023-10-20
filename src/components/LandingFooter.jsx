import React from "react";
import "../css/LandingFooter.css";
function Footer() {
	return (
		<div>
			<div id="footer-style">
				<div className="ui inverted vertical footer segment">
					<div className="ui container filling">
						<div className="ui stackable inverted divided equal height stackable grid">
							<div className="three wide column">
								<h3 className="ui inverted header">Useful Links</h3>
								<div className="ui inverted link list">
									<a href="https://www.vit.edu/" className="item">
										Vishwakarma Institute Of Technology, Pune
									</a>
								</div>
							</div>
							<div className="three wide column">
								<h3 className="ui inverted header">Ref.</h3>
								<div className="ui inverted link list">
									<a href="https://www.linkedin.com/in/pushkar-joglekar-615506a2/" className="item">
										Prof. Pushkar Joglekar
									</a>
									<a href="https://www.linkedin.com/in/arnav-kanathia-a92495252/" className="item">
										Stud. Arnav Kanathia
									</a>
									<span className="item">&copy;{new Date().getFullYear()}</span>
								</div>
							</div>
							<div className="seven wide column">
								<h3 className="ui inverted header">
									<p>
										<b>
											<br></br>
											<br></br>
											<span id="footer-1">Made </span>
											<span id="footer-2">with </span>
											<span style={{ color: "#e25555" }}>&hearts;</span>
											<span id="footer-3"> in India.</span>
										</b>
									</p>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
