
import Imagen_principal2 from './Imagen_principal2'

import Nav from './Nav'



import Footer from './footer'
// className={styl.imagen_reserva}
import styl from "./estilos.module.css";

//las funciones siempre tienen que estar en mayuscula
function Reservacion_Vip() {
  return (
    <section className="vip-section py-5">
      <Nav></Nav>
      <div className="container">
        <div className="row align-items-center">
         <div className={`col-md-8 mb-4 mb-md-0 d-flex justify-content-center ${styl.imagenp}`}>
           <Imagen_principal2 />
          </div>
       <div className="col-md-5">
          <h1 className="mb-4 text-primary"></h1>
        </div>
      </div>
     </div>
      <p></p>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 order-md-1 order-2">
            <h1 className="mb-4 text-primary">SALON VIP</h1>
            <ul>
              <li>Ubicación: ZONA VIP</li>
              <li>Precio: 100$</li>
              <li>Extras: Menú al isntante</li>
            </ul>
          </div>

          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src="https://astridygaston.com/_gatsby/file/e2162116b38f251120166704ba07612e/salones-privados.webp?u=https%3A%2F%2Fadmin.astridygaston.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fsalones-privados.webp"
              alt="RESERVACION DE TIPO NORMAL"
              className={styl.imagen_reserva}
            />
          </div>
        </div>
      </div>

      <p></p>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 mb-4 mb-md-0">
            <img
              src="https://www.swissotel.com/assets/0/92/2119/2178/2217/2219/6442451722/079c766f-eff5-4d4f-b6ed-eba7d59db54e.jpg"
              alt="VIP"
              className={styl.imagen_reserva}
            />
          </div>

          <div className="col-md-5">
            <h1 className="mb-4 text-primary">SALON EJECUTIVO</h1>
            <ul>
              <li>Ubicación:ZONA EJECUTIVA</li>
              <li>Precio: 200$ </li>
              <li>Extras: Menú Ejecutivo</li>
            </ul>
          </div>
        </div>
      </div>
      <p></p>
        <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 order-md-1 order-2">
            <h1 className="mb-4 text-primary">SALON PREMIUN</h1>
            <ul>
              <li>Ubicación: ZONA PREMIUN</li>
              <li>Precio: 150$</li>
              <li>Extras: Menú limitado</li>
            </ul>
          </div>

          <div className="col-md-7 mb-4 mb-md-0 order-md-2 order-1">
            <img
              src="https://img.freepik.com/fotos-premium/zona-salon-blanca-restaurante-lujo-visitantes_175935-1114.jpg"
              alt="RESERVACION DE TIPO NORMAL"
              className={styl.imagen_reserva}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Reservacion_Vip;
