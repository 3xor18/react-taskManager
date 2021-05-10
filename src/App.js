import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Login } from './components/auth/Login';
import { NuevaCuenta } from './components/auth/NuevaCuenta';
import { Proyectos } from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';

function App() {
	return (
		<ProyectoState>
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/nueva-cuenta">
						<NuevaCuenta />
					</Route>
					<Route exact path="/proyectos">
						<Proyectos />
					</Route>
					<Redirect exact to="/" />
				</Switch>
			</Router>
		</ProyectoState>
	);
}

export default App;
