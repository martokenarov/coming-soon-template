import React, { useState, useEffect } from "react";
import {calculateCountdown, addLeadingZeros} from './../utils/helpers';
import styles from './CountDown.module.css';

const  CountDown:React.FC<{date: any}> = ({ date }) => {
	const [countDown, setCountDown] = useState({
		days: 0,
		hours: 0,
		min: 0,
		sec: 0
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const newDate = calculateCountdown(date);
			if (newDate) {
				setCountDown(newDate);
			} else {
				clearInterval(interval);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={styles.flex}>
			<div className={styles.item}>
				<div className={styles.square}>{addLeadingZeros(countDown.days)}</div>
				{countDown.days === 1 ? (
					<span >Day</span>
				) : (
					<span>Days</span>
				)}
			</div>
			<div className={styles.item}>
				<div className={styles.square}>{addLeadingZeros(countDown.hours)}</div>
				<span>Hours</span>
			</div>
			<div className={styles.item}>
				<div className={styles.square}>{addLeadingZeros(countDown.min)}</div>
				<span>Minutes</span>
			</div>
			<div className={styles.item}>
				<div className={styles.square}>{addLeadingZeros(countDown.sec)}</div>
				<span>Seconds</span>
			</div>
		</div>
	);
};

export default CountDown;
