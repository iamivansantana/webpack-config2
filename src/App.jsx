import './App.css';
import './App.scss';
import logo from './icon-ghost.svg';

const App = () => {
	return (
		<div className='app'>
			<h1>Hola React From Webpack!!!</h1>
			<img src={logo} width='25' alt='ghost logo' />
		</div>
	);
};

export default App;
