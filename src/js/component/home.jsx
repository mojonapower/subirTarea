import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component

export function CajaDarks() {
	return <div className="dark mx-5">Hola soy muy darks</div>;
}

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="row">
				<CajaDarks></CajaDarks>
			</div>

			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};
