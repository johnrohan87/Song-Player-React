import React, { useState } from "react";
import PropTypes from "prop-types";

export function Song({ title, url }) {
	return (
		<div className="text-center mt-5">
			song title {title}
			song url {url}
		</div>
	);
}

Song.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string
};
