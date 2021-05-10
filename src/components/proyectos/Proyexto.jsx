import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';

export const Proyecto = ({ proyecto }) => {
	const { proyetoActual } = useContext(
		proyectoContext
	);

	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={() => proyetoActual(proyecto.id)}
			>
				{proyecto.nombre}
			</button>
		</li>
	);
};
