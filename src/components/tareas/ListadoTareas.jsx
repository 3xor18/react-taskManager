import React, {
	Fragment,
	useContext,
} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import { Tarea } from './Tarea';

export const ListadoTareas = () => {
	const tareasProyecto = [
		{ nombre: 'tarea 1', estado: true },
		{ nombre: 'tarea 2', estado: false },
		{ nombre: 'tarea 3', estado: false },
		{ nombre: 'tarea 4', estado: true },
	];

	const {
		proyecto,
		eliminarProyecto,
	} = useContext(proyectoContext);

	if (!proyecto)
		return <h2>Selecciona un proyecto</h2>;

	const [proyectoActual] = proyecto;

	return (
		<Fragment>
			<h2>Proyecto: {proyectoActual.nombre}</h2>
			<ul className="listado-tareas">
				{tareasProyecto.length === 0 ? (
					<li className="tarea">
						<p>No hay tareas</p>
					</li>
				) : (
					tareasProyecto.map((tarea) => (
						<Tarea tarea={tarea} />
					))
				)}
			</ul>
			<button
				type="button"
				className="btn btn-eliminar"
				onClick={() =>
					eliminarProyecto(proyectoActual.id)
				}
			>
				Eliminar Proyecto &times;
			</button>
		</Fragment>
	);
};
