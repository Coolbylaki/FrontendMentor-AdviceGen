import QuoteBreakSVG from "./assets/images/pattern-divider-mobile.svg";
import DiceSVG from "./assets/images/icon-dice.svg";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";

function App() {
	return (
		<div className="flex justify-center">
			<Card className="bg-darkGrayishBlue rounded-xl max-w-[90%] mt-32 p-5 relative pb-16">
				<p className="text-neonGreen text-[0.75rem] text-center pt-5 tracking-[0.2rem]">ADVICE #117</p>
				<h1 className="text-lightCyan text-[1.5rem] text-center my-6">
					<q>It is easy to sit up and take notice, what's difficult is getting up and taking action.</q>
				</h1>
				<img src={QuoteBreakSVG} alt="quote breakpoint" className="fill-current text-red-500" />
				<Button className="bg-neonGreen p-5 rounded-full absolute left-[40.50%] bottom-[-2rem]">
					<img src={DiceSVG} alt="dice button" />
				</Button>
			</Card>
		</div>
	);
}

export default App;
