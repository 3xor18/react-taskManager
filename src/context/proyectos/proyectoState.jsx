import { useReducer } from 'react';
import {
	AGREGAR_PROYECTO,
	ELIMINAR_PROYECTO,
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	PROYECTO_ACTUAL,
	VALIDAR_FORM,
} from '../../types';
import proyectoContext from './proyectoContex';
import proyectoReducer from './proyectoReducer';
import { v4 as uuid } from 'uuid';

const ProyectoState = (props) => {
	const proyects = [
		{ id: 1, nombre: 'pro 1' },
		{ id: 2, nombre: 'pro 2' },
		{ id: 3, nombre: 'pro 3' },
		{ id: 4, nombre: 'pro 4' },
	];

	const initialState = {
		formulario: false,
		proyectos: [],
		errorFormulario: false,
		proyecto: null,
	};

	const [state, dispatch] = useReducer(
		proyectoReducer,
		initialState
	);

	const mostarFormulario = () => {
		dispatch({ type: FORMULARIO_PROYECTO });
	};

	const obtenerProyectos = () => {
		dispatch({
			type: OBTENER_PROYECTOS,
			payload: proyects,
		});
	};

	const agregarProyecto = (proyecto) => {
		proyecto.id = uuid();

		dispatch({
			type: AGREGAR_PROYECTO,
			payload: proyecto,
		});
	};

	const mostarError = () => {
		dispatch({ type: VALIDAR_FORM });
	};

	const proyetoActual = (proyectoId) => {
		dispatch({
			type: PROYECTO_ACTUAL,
			payload: proyectoId,
		});
	};

	const eliminarProyecto = (proyectoId) => {
		dispatch({
			type: ELIMINAR_PROYECTO,
			payload: proyectoId,
		});
	};

	return (
		<proyectoContext.Provider
			value={{
				proyectos: state.proyectos,
				formulario: state.formulario,
				proyecto: state.proyecto,
				errorFormulario: state.errorFormulario,
				mostarFormulario,
				obtenerProyectos,
				agregarProyecto,
				mostarError,
				proyetoActual,
				eliminarProyecto,
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	);
};

export default ProyectoState;
