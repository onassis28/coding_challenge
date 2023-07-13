import './startup.css';

interface StartUpProps {
	name: string;
	shortDescription: string;
	numberOfEmployees: string;
	currentInvestmentStage: string;
	funding: number;
	dateFounded: Date;
}

const StartUp = ({
	name,
	shortDescription,
	numberOfEmployees,
	currentInvestmentStage,
	funding,
	dateFounded,
}: StartUpProps) => {
	const date = new Date(dateFounded).getFullYear().toString();
	return (
		<div className='container'>
			<span>{name}</span>
			<div className='sub-container'>
				<span>Founded: {date} |</span>
				<span>{numberOfEmployees} Employees |</span>
				<span>{funding}$ |</span>
				<span>{currentInvestmentStage}</span>
			</div>
			<span>{shortDescription}</span>
		</div>
	);
};

export default StartUp;
