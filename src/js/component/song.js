import React, { useState } from "react";
import PropTypes from "prop-types";

<<<<<<< HEAD
export function Song({ title, url, onClick }) {
	return (
		<div onClick={() => onClick()} className="text-center mt-5">
=======
export function Song({ title, url }) {
	return (
		<div className="text-center mt-5">
>>>>>>> 76a9f6008f43baf02ea75a1fb721fa983f089733
			song title {title}
			song url {url}
		</div>
	);
}

Song.propTypes = {
	title: PropTypes.string,
<<<<<<< HEAD
	url: PropTypes.string,
	onClick: PropTypes.func
=======
	url: PropTypes.string
>>>>>>> 76a9f6008f43baf02ea75a1fb721fa983f089733
};
