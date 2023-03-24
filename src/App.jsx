import { Fragment } from "react";
import Card from "./components/UI/Card";
import Footer from "./components/UI/Footer";

function App() {
	return (
		<Fragment>
			<div className="flex justify-center">
				<Card />
			</div>
			<Footer />
		</Fragment>
	);
}

export default App;
