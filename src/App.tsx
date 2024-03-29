
import { useEffect, useState, MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	const [counter, setCounter] = useState<number>(0); //требуется доп типизация

	useEffect(() => {
		console.log('Test');
	}, []); //useEffect не требует доп типизации

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter}>Кнопка</Button>
			<Button appearance='big'>Оформить</Button>
			<Input placeholder='Email' />
		</>
	);
}

export default App;
