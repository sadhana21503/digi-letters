import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LetterPreview.scss";

const LetterPreview = () => {
	const { state: formData } = useLocation();
	const navigate = useNavigate();

	if (!formData) {
		return (
			<div>
				<p>No data available for preview</p>
				<button onClick={() => navigate('/lettertype')}>Back</button>
			</div>
		);
	}

	const handleSubmit = () => {
		alert("Submitting Letter check status for more!");
		navigate("/status"); 
	};

	return (
		<section className="letter-preview">
			<section className="s1">
				<p>{formData?.name || "N/A"}</p>
				<p>{formData?.srn || "N/A"}</p>
				<p>
					{formData?.year || "N/A"},{formData?.Sem || "N/A"}
				</p>
				<p>{formData?.address || "N/A"}</p>
				<p>{formData?.city || "N/A"}</p>
			</section>
			<section className="s2">
				<p>{new Date().toLocaleDateString()}</p>
			</section>
			<section className="s3">
				<p>Director,</p>
				<p>School of EEE,</p>
				<p>Reva University</p>
				<p>Yelahanka,</p>
				<p>Bangalore, 560068</p>
			</section>
			<section className="s4">
				<p>Dear Sir,</p>
				<p>Subject: {formData?.subject || "N/A"}</p>
			</section>
			<section className="s5">
				<p> I, {formData?.name || "N/A"}, from {formData?.yearSem || "N/A"}, would
					like to request for {formData?.purpose || "N/A"}.
				</p>
				<p>Kindly do the needful and approve the letter.</p>
			</section>
			<section className="s6">
				<p>Thank you,</p>
				<p>Sincerely,</p>
				<p>{formData?.name || "N/A"}</p>
			</section>
			<section className="buttons">
				<button onClick={() => navigate(-1)}>Back</button>
				<button onClick={handleSubmit}>Submit</button>
			</section>
		</section>
	);
};

export default LetterPreview;
