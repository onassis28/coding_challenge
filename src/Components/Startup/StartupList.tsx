import { ReactElement, useEffect, useState } from 'react';
import { StartupHttpService } from '../../Http/Startup/Startup.http.service';
import StartUp from './startUp';
import { Startup } from '../../Types/Startup';

export default function StartupList(): ReactElement {
	const [startUps, setStartUps] = useState<Startup[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const startupData = await StartupHttpService.getStartups();
				setStartUps(startupData);
			} catch (error) {}
		};

		fetchData();
	}, []);

	if (startUps.length === 0) {
		return <div>StartUpLife Loading</div>;
	}

	const startUpListToDisplay = startUps.map((startUp) => {
		return (
			<StartUp
				key={startUp.id}
				funding={startUp.totalFunding}
				dateFounded={startUp.dateFounded}
				name={startUp.name}
				shortDescription={startUp.shortDescription}
				numberOfEmployees={startUp.employees}
				currentInvestmentStage={startUp.currentInvestmentStage}
			/>
		);
	});

	return <div>{startUpListToDisplay}</div>;
}
