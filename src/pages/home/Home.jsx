import React from 'react'
import "./Home.scss"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
const Home = () => {

    const [popupData, setPopupData] = useState(null);
    const navigate = useNavigate();
    const handleLetterClick = () => {
        navigate("/lettertype");
    }
    const handlePopup = (type) => {
		setPopupData({type});
	};
	const closePopup = () => {
		setPopupData(null);
	};
  return (
		<>
			<section className="home-main">
				<section className="home-top">
					<h1>DIGI LETTERS</h1>
				</section>
				<section className="home-bottom">
					<button onClick={handleLetterClick}>Write a Letter</button>
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

export default Home;