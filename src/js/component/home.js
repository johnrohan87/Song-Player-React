import React from "react";
import { Song } from "./song";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Song title={"example"} url={"example"} />
		</div>
	);
}
