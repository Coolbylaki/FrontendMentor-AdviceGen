import { Fragment } from "react";
import Card from "./components/UI/Card";

function App() {
	return (
		<Fragment>
			<div className="flex justify-center">
				<Card />
			</div>
			<footer className="fixed w-full bottom-0 text-xs text-lightCyan text-center">Coded by Lazar Stojanović</footer>
		</Fragment>
	);
}

export default App;
