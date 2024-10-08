import React, { useState } from "react";
import "./Status.scss";
import { useNavigate } from "react-router-dom";

const Status = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState(null);
	const [showPopup, setShowPopup] = useState(false); 

	const handleCheckStatus = () => {
		const fetchedStatus = "approved"; 
		setStatus(fetchedStatus);

		if (fetchedStatus === "pending") {
			setShowPopup(true);
			setTimeout(() => {
				setShowPopup(false);
			}, 1500);
		} else {
			navigate("/letter-view", { state: { status: fetchedStatus } });
		}
	};

	const handleClick = () => {
		navigate("/home"); 
	};

	return (
		<>
			<section className="status-main">
				<section className="status-top">
					<h1>DIGI LETTER</h1>
				</section>
				<section className="status-mid">
					<p>Letter sent, waiting for approval</p>
					<button onClick={handleCheckStatus}>Check Status</button>
				</section>
				<section className="status-bottom">
					<button onClick={handleClick}>Home</button>
				</section>

				{showPopup && (
					<div className="status-popup">
						<h2>Status is pending...</h2>
					</div>
				)}
			</section>
		</>
	);
};

export default Status;
