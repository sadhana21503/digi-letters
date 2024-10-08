import React from 'react'
import "./THome.scss"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
const THome = () => {

    const [popupData, setPopupData] = useState(null);
    const navigate = useNavigate();
    const handleLetterClick = () => {
        navigate("/letterlist");
    }
    const handlePopup = (type) => {
		setPopupData({type});
	};
	const closePopup = () => {
		setPopupData(null);
	};
  return (
		<>
			<section className="thome-main">
				<section className="thome-top">
					<h1>DIGI LETTERS</h1>
				</section>
				<section className="thome-bottom">
					<button onClick={handleLetterClick}>Check Pending Letters</button>
					<button onClick={() => handlePopup("Approved Letters")}>
						Approved Letters
					</button>
					<button onClick={() => handlePopup("Rejected Letters")}>
						Rejected Letters
					</button>
					<button onClick={() => handlePopup("Pending Letters")}>
						Pending Letters
					</button>
				</section>
			</section>
			{popupData && (
				<Popup
					title={popupData.type}
					onClose={closePopup}
				/>
			)}
		</>
	);
}

export default THome;