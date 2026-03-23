import './Login.css'
import { useState } from "react";
import { User, Lock } from "lucide-react";
import Lista_Reservas from "./ListaReservas";
function Login() {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [campoVacio, setCampoVacio] = useState(false);
  const [irAReservas, setIrAReservas] = useState(false);
  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || contrasena === "") {
      setCampoVacio(true);
      return;
    }
    setCampoVacio(false);
    setIrAReservas(true)
  
  };

  if (irAReservas){
    return <Lista_Reservas></Lista_Reservas>
  }

  return (
    <div className="login-fondo">

      <div className="login-icono-usuario">
        <User size={45} color="white" />
      </div>

      <h1 className="login-titulo">INICIO DE SESION</h1>

      <form className="login-formulario" onSubmit={manejarSubmit}>

        <div className="login-input-grupo">
          <User size={20} color="#aaa" />
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="login-input-grupo">
          <Lock size={20} color="#aaa" />
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Contraseña"
          />
        </div>

        {campoVacio && (
          <p className="login-error">Todos los campos son obligatorios</p>
        )}

        <button type="submit">Ingresar</button>

      </form>
    </div>
  );
}

export default Login;