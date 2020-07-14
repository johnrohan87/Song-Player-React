import React, { useState } from "react";
import { Song } from "./song";
import { Player } from "./player";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let thePlayer = new Audio(
	"https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3"
);

//create your first component
export function Home() {
	const [songlist, setSongList] = useState([]);
	const [currentSong, setcurrentSong] = useState([]);

	React.useEffect(() => {
		// side effect hook
		// call API with props.greeting parameter
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(data => setSongList(data));
	}, []);

	return (
		<div className="text-center mt-5">
			{songlist.map((s, i) => (
				<Song
					key={i}
					title={s.name}
					url={s.url}
					onClick={() => {
						console.log(s.name + " was Clicked " + s.url);
						setcurrentSong(s.url);
						thePlayer.src =
							"https://assets.breatheco.de/apis/sound/" + s.url;
						thePlayer.play();
					}}
				/>
			))}
			<Player
				url={currentSong}
				onStart={() => {
					thePlayer.play();
				}}
				onStop={() => {
					thePlayer.pause();
				}}
			/>
		</div>
	);
}
