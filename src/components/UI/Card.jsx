import quoteSVG from "../../assets/images/pattern-divider-desktop.svg";
import DiceSVG from "../../assets/images/icon-dice.svg";
import Button from "./Button";
import api from "../API/advice-generator.js";
import { useEffect, useState, useCallback } from "react";

const Card = () => {
	const [advice, setAdvice] = useState("Loading...");
	const [adviceNum, setAdviceNum] = useState("000");

	const fetchAdvice = useCallback(async () => {
		const response = await api.get("/advice");
		const adviceText = response.data.slip.advice;
		const adviceID = response.data.slip.id;

		setAdvice(adviceText);
		setAdviceNum(adviceID);
	}, []);

	useEffect(() => {
		fetchAdvice();
	}, [fetchAdvice]);

	return (
		<section className="bg-darkGrayishBlue rounded-xl max-w-[90%] mob-max-w-[60%] pc:max-w-[30%] mt-[8rem] p-5 pb-16 relative">
			<p className="text-neonGreen text-[0.75rem] text-center pt-5 tracking-[0.2rem]">ADVICE #{adviceNum}</p>
			<h1 className="text-lightCyan text-[1.5rem] text-center my-6">
				<q>{advice}</q>
			</h1>
			<img src={quoteSVG} alt="quote breakpoint" className="mx-auto" />
			<div className="flex justify-center">
				<Button className="bg-neonGreen p-5 rounded-full absolute bottom-[-2rem]" onClick={fetchAdvice}>
					<img src={DiceSVG} alt="dice button" />
				</Button>
			</div>
		</section>
	);
};

export default Card;

//absolute left-[40.50%] bottom-[-2rem]
