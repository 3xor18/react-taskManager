import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NuevaCuenta = () => {
	const [usuario, guardarUsuario] = useState({
		nombre: '',
		email: '',
		password: '',
		repassword: '',
	});

	const {
		email,
		password,
		nombre,
		repassword,
	} = usuario;

	const handleChange = ({
		target: { name, value },
	}) => {
		guardarUsuario({ ...usuario, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div className="form-usuario">
				<div className="contenedor-form sombra-dark">
					<h1>Obtener una Cuenta</h1>
					<form onSubmit={handleSubmit}>
						{/* Nombre  */}
						<div className="campo-form">
							<label htmlFor="name">Nombre</label>
							<input
								type="text"
								id="nombre"
								name="nombre"
								placeholder="Tu Nombre"
								value={nombre}
								onChange={handleChange}
							/>
						</div>
						{/* Email  */}
						<div className="campo-form">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Tu Email"
								value={email}
								onChange={handleChange}
							/>
						</div>
						{/* Password */}
						<div className="campo-form">
							<label htmlFor="password">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={password}
								placeholder="Tu Password"
								onChange={handleChange}
							/>
						</div>
						{/* pass2 */}
						<div className="campo-form">
							<label htmlFor="repassword">
								Confirme Password
							</label>
							<input
								type="password"
								id="repassword"
								name="repassword"
								value={repassword}
								placeholder="Confirme el password"
								onChange={handleChange}
							/>
						</div>
						{/* Button */}
						<div className="campo-form">
							<input
								type="submit"
								className="btn btn-primario btn-block"
								value="Registarme"
							/>
						</div>
					</form>
					<Link
						to={'/'}
						className="enlace-cuenta"
					>
						Iniciar Sesión
					</Link>
				</div>
			</div>
		</div>
	);
};
