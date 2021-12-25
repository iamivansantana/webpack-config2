import './App.css';
import './App.scss';
import logo from './icon-ghost.svg';

const App = () => {
	return (
		<div className='app'>
			<h1>Este es el segundo cambio!!!</h1>
			<img src={logo} width='50' alt='ghost logo' />
			<input type='text' />
		</div>
	);
};

export default App;
