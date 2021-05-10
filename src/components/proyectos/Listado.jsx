import React, {
	useContext,
	useEffect,
} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import { Proyecto } from './Proyexto';

export const ListadoProyecto = () => {
	const {
		proyectos,
		obtenerProyectos,
	} = useContext(proyectoContext);

	useEffect(() => {
		obtenerProyectos();
	}, []);

	if (proyectos.length === 0)
		return (
			<p>
				No hay proyectos, comienza creando uno
			</p>
		);

	return (
		<ul className="listado-proyectos">
			{proyectos.map((proyecto) => (
				<Proyecto
					proyecto={proyecto}
					key={proyecto.id}
				/>
			))}
		</ul>
	);
};
