import React, { useState } from "react";
import PropTypes from "prop-types";

export function Player({ url, onStart, onStop }) {
	const [start, setStart] = useState(false);
	return (
		<div className="text-center mt-5">
			<button
				onClick={() => {
					setStart(!start);
					if (start) {
						onStart();
					} else {
						onStop();
					}
				}}>
				{start ? (
					<i
						className="fa fa-stop-circle"
						style={{ fontSize: "48px", color: "black" }}
					/>
				) : (
					<i
						className="fa fa-play-circle"
						style={{ fontSize: "48px", color: "red" }}
					/>
				)}
			</button>
		</div>
	);
}

Player.propTypes = {
	start: PropTypes.string,
	url: PropTypes.string,
	onStart: PropTypes.func,
	onStop: PropTypes.func
};
