<<<<<<< HEAD
import React, { useState } from "react";
import { Song } from "./song";
import { Player } from "./player";
=======
<<<<<<< HEAD
import React, { useState } from "react";
import { Song } from "./song";
import { Player } from "./player";
=======
import React from "react";
import { Song } from "./song";
>>>>>>> 9ed9931eb02132e40771690682b8d2e15d860796
>>>>>>> 76a9f6008f43baf02ea75a1fb721fa983f089733

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 76a9f6008f43baf02ea75a1fb721fa983f089733
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
<<<<<<< HEAD
=======
=======
			<Song title={"example"} url={"example"} />
>>>>>>> 9ed9931eb02132e40771690682b8d2e15d860796
>>>>>>> 76a9f6008f43baf02ea75a1fb721fa983f089733
		</div>
	);
}
