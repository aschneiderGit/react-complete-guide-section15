import {useEffect, useState} from 'react';

const useCounter = (i = 1) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + i);
		}, 1000);

		return () => clearInterval(interval);
	}, [i]);

	return counter;
};

export default useCounter;
