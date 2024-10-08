import React from 'react'
import "./LetterList.scss"
import { useNavigate } from "react-router-dom";
const LetterList = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/letter");
	}
        const formsData = [
					{ id: 1, name: "Letter 1", date: "2024-09-25" },
					{ id: 2, name: "Letter 2", date: "2024-09-24" },
					{ id: 3, name: "Letter 3", date: "2024-09-23" },
					{ id: 4, name: "Letter 4", date: "2024-09-22" },
				];
  return (
		<>
			<section className="formlist-main">
				<section className="formlist-1">
					<h1>DIGI LETTER</h1>
				</section>
				<section className="formlist-2">
					<p>List of letters to be approved</p>
					<ul className="form-list">
						{formsData.map((form) => (
							<div key={form.id} className="form-list-item" onClick={handleClick}>
								<span className="form-name">{form.name}</span>
								<span className="form-date">{form.date}</span>
							</div>
						))}
				  </ul>
				</section>
			</section>
		</>
	);
}

export default LetterList