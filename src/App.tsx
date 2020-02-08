import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	// Initialize type and value
	let firstValue: string = 'Santiago';
	let secondValue: number = 10;
	let thirdValue: boolean = true;
	let fourthValue: number[] = [2, 3, 56];
	let fifthValue: Array<number> = [2, 3, 56];

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					The value {firstValue} is of {typeof firstValue} type!
				</p>
				<p>
					The value {secondValue} is of {typeof secondValue} type!
				</p>
				<p>
					The value {thirdValue} is of {typeof thirdValue} type!
				</p>
				<p>
					The value {fourthValue} is of {typeof fourthValue} type!
				</p>
				<p>
					The value {fifthValue} is of {typeof fifthValue} type!
				</p>
			</header>
		</div>
	);
}

export default App;
