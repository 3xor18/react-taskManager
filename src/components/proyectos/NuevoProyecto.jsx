import React, {
	Fragment,
	useContext,
	useState,
} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';

export const NuevoProyecto = () => {
	const proyectosContex = useContext(
		proyectoContext
	);

	const {
		formulario,
		mostarFormulario,
		agregarProyecto,
		mostarError,
		errorFormulario,
	} = proyectosContex;

	const [proyecto, guardarProyecto] = useState({
		nombre: '',
	});

	const { nombre } = proyecto;

	const onChangeProyecto = ({
		target: { value, name },
	}) => {
		guardarProyecto({
			...proyecto,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (nombre === '') {
			mostarError();
			return;
		}

		agregarProyecto(proyecto);
		guardarProyecto({ nombre: '' });
	};

	const handleClick = (e) => {
		mostarFormulario();
	};

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-block btn-primario"
				onClick={handleClick}
			>
				Nuevo Proyecto
			</button>
			{formulario && (
				<form
					className="formulario-nuevo-proyecto"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						className="input-text"
						placeholder="Nombre de Proyecto"
						name="nombre"
						onChange={onChangeProyecto}
						value={nombre}
					/>
					<input
						type="submit"
						className="btn btn-primario btn-block"
						value="Agregar Proyecto"
					/>
				</form>
			)}
			{errorFormulario && (
				<p className="mensaje error">
					El nombre es obligatorio
				</p>
			)}
		</Fragment>
	);
};
