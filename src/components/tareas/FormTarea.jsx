import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';

export const FormTarea = () => {
	const { proyecto } = useContext(
		proyectoContext
	);
	if (!proyecto) return null;

	const [proyectoActual] = proyecto;

	return (
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Tarea"
						name="nombre"
					/>
				</div>
				<div className="contenedor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value="Agregar Tarea"
					/>
				</div>
			</form>
		</div>
	);
};
