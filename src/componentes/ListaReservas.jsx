import { useState, useEffect } from 'react';
import styles from "./estilos.module.css";
import Reservas from './Reservas';
import { BookCheck, MessageCircleX } from "lucide-react";
import Footer from './footer';
import Nav from './Nav';

function Lista_Reservas() {
  const [mostrar_reservas, set_reservas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/reservas");
        if (!response.ok) {
          throw new Error(`Error en http: ${response.status}`);
        }
        const data = await response.json();
        set_reservas(data);
        console.log("RESERVAS CARGADAS");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const generar_reserva = (nuevareserva) => {
    set_reservas([...mostrar_reservas, nuevareserva]);
  };

  const eliminar_reserva = (id) => {
    set_reservas(mostrar_reservas.filter(reserva => reserva.id !== id));

    fetch(`http://localhost:3000/reservas/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`ERROR AL ELIMINAR LA RESERVA EN PIDE YA: ${response.status}`);
        }
        console.log("RESERVA ELIMINADA CORRECTAMENTE");
      })
      .catch(error => console.error(error));
  };

  return (
    <section className={styles.seccion_reservas}>
      <Nav></Nav>
      <h1 className={styles.reservas_h1}>MIS RESERVAS</h1>
      <p className={styles.reservas_p}> Explora nuestra experiencia unica en nuestras reservas con la que puedes ver y gestionarlas</p>    
      <Reservas onGenerar_reserva={generar_reserva} />
      <img className={styles.img_reservas} src='https://tse2.mm.bing.net/th/id/OIP.pTOUz7TNCSU7RSD0H_Ij_gHaE_?rs=1&pid=ImgDetMain&o=7&rm=3'></img>
      <div className={styles.ESTILO_RESERVA}>
        <ul>
          {mostrar_reservas.map((reserva) => (
            <li key={reserva.id}>
              <span className={styles.Span}>
                NOMBRE: {reserva.nombre}, TIPO: {reserva.tipo}, PRECIO: {reserva.precio}$, ID: {reserva.id}
              </span>
              <div className={styles.iconos}>
                <BookCheck color="green" size={40} />
              
                 <p>ESTADO:ACTIVO</p>
                <MessageCircleX
                  onClick={() => eliminar_reserva(reserva.id)}
                  color="#d45959"
                  size={40}
                /> <p>ELIMINAR RESERVA</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Lista_Reservas;