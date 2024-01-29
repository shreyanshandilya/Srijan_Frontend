import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
const CardComponent = ({ title, eligibleThings }) => {
  const navigate = useNavigate();
  const Price = {
    bronze: 1199,
    silver: 1499,
    gold: 1799,
    platinum: 1999,
    "basic":799,
    "essential":699
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
      <div className={`card1 card1-${title.toLowerCase()}`}>
        <div className={`boxshadow0 boxshadow0-${title.toLowerCase()}`}></div>
        <div className={`main0 main0-${title.toLowerCase()}`}>
          <div className="top0"></div>
          <div className="left0 side0"></div>
          <div className="right0 side0"></div>
          <div className="title0">{title.toUpperCase()}</div>
          <div className="button-container0">
            <div className="button-container0">
              {eligibleThings.map((thing) => (
                <button className="button0">
                  <div className="svg0">
                    <p
                      style={{
                        color: "#000000",
                        fontWeight: "700",
                        fontSize: "0.76rem",
                      }}
                    >
                      • {thing}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            navigate(`/accomodation/${title.toLowerCase()}`);
          }, 0);
        }}
        className="button1 mt-4"
      >
        ₹ {Price[title.toLowerCase()]}
      </button>
    </div>
  );
};

export default CardComponent;
