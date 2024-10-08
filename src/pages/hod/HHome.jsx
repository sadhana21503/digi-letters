import React from 'react'
import "./HHome.scss"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
const HHome = () => {

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
			<section className="hhome-main">
				<section className="hhome-top">
					<h1>DIGI LETTERS</h1>
				</section>
				<section className="hhome-bottom">
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

export default HHome;