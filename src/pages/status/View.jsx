import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./View.scss";
import approvedImage from "../../assets/images/approved.jpg";
import rejectedImage from "../../assets/images/rejected.jpg";

const View = () => {
  const location = useLocation();
  const formData = location.state || {}; 
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const statusFromServer = "reject"; 
      setStatus(statusFromServer);
    };
    fetchStatus();
  }, []);

  if (!location.state) {
    return (
      <div className="no-data">
        <p>No data available for preview</p>
        <button onClick={() => navigate("/lettertype")}>Back</button>
      </div>
    );
  }

  const handleSubmit = () => {
    alert("Submitting Letter, check status for more!");
    navigate("/status");
  };

  const getStatusImage = () => {
    if (status === "approve") {
      return approvedImage;
    } else if (status === "reject") {
      return rejectedImage;
    }
    return null;
  };

  return (
    <section className="letter-preview">
      <section className="s1">
        <p>{formData?.name || "N/A"}</p>
        <p>{formData?.srn || "N/A"}</p>
        <p>
          {formData?.year || "N/A"}, {formData?.Sem || "N/A"}
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
        <p>
          I, {formData?.name || "N/A"}, from {formData?.yearSem || "N/A"},
          would like to request for {formData?.purpose || "N/A"}.
        </p>
        <p>Kindly do the needful and approve the letter.</p>
      </section>
      <section className="s6">
        <p>Thank you,</p>
        <p>Sincerely,</p>
        <p>{formData?.name || "N/A"}</p>
      </section>

      <section className="buttons">
        <button onClick={() => navigate("/home")}>Home</button>

        {status && (
          <img
            src={getStatusImage()}
            alt={status === "reject" ? "Rejected" : "Approved"}
            onClick={handleSubmit}
            className="status-image"
          />
        )}
      </section>
    </section>
  );
};

export default View;
