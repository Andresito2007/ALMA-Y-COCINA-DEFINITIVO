

import { useState } from "react";
import styl from "./estilos.module.css";

function Reservas({ onGenerar_reserva }) {
  const [tipoReserva, setTipoReserva] = useState("");
  const [costo_reserva, setCostoReserva] = useState(0);
  const [nombre_Usuario, setNombreUsuario] = useState("");

  const handleChange2 = (e) => {
    const nombre = e.target.value.toLowerCase();
    setNombreUsuario(nombre);
  };

  const handleChange = (e) => {
    const valor = e.target.value.toLowerCase();
    setTipoReserva(e.target.value);

    if (valor === "normal") {
      setCostoReserva(50);
    } else if (valor === "vip") {
      setCostoReserva(200);
    } else if (valor === "premiun") {
      setCostoReserva(150);
    } else {
      setCostoReserva(0);
    }
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (tipoReserva === "" || nombre_Usuario === "") {
      alert("NO PUEDES DEJAR EN BLANCO ESTE REQUISITO");
      return;
    }

    const nueva_Reserva = {
      tipo: tipoReserva,
      precio: costo_reserva,
      nombre: nombre_Usuario
    };

    fetch("http://localhost:3000/reservas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nueva_Reserva)
    })
      .then((response) => response.json())
      .then((data) => {
        onGenerar_reserva(data);
        setTipoReserva("");
        setCostoReserva(0);
        setNombreUsuario("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={styl.FOOTER_RESERVACION}>
      <form onSubmit={handleSubmit} className="FORMULARIO">
        <input
          type="text"
          name="reserva"
          placeholder="TIPO DE RESERVA"
          value={tipoReserva}
          onChange={handleChange}
          className="INPUT"
        />

        <input
          type="text"
          name="nombre"
          placeholder="INGRESE SU NOMBRE"
          value={nombre_Usuario}
          onChange={handleChange2}
          className="INPUT"
        />

        <button type="submit" className="BOTON">CONFIRMAR RESERVA</button>
      </form>
    </div>
  );
}

export default Reservas;