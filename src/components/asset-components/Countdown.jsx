import React, { useState, useEffect } from "react";
import "./styles.css";

const COUNTDOWN_TARGET = new Date("2024-02-01T23:59:59");

const getTimeLeft = ()=> {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const DAYS = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const HOURS = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const MINUTES = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const SECONDS = Math.floor((totalTimeLeft / 1000) % 60);
	return { DAYS, HOURS, MINUTES, SECONDS };
};

const styleContent = {
	"display" : "flex",
	"justifyContent" : "center"
}

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='countdown'>
			<div className='content' style={styleContent}>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];
					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
							</div>
							<span className='label'> {label} </span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Countdown;
