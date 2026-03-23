
// className={`reserva-section py-5 ${styl.miEstilo}`}
import { Link } from "react-router-dom";
import styl from "./estilos.module.css";
function Seccion_Reservas(){
    return (
      <div className={styl.cono_reserva}>
         <section className="reserva-section py-5 ">
               <div className="container">
                 <div className="row align-items-center">
                   <div className={`col-md-7 mb-4 mb-md-0  `}>
                     <img
                       src="https://astridygaston.com/_gatsby/file/cc1f0d25f5bd470274119959d758574b/foto-eventos.png?u=https://admin.astridygaston.com/wp-content/uploads/2024/01/foto-eventos.png"
                       alt="seccion reserva"
                       className="img-fluid rounded shadow"
                     />
                   </div>
                   <div className="col-md-5">
                     <h1 className="mb-4 text-primary">TIPOS DE RESERVA</h1>
                     <p> ELIGE LA QUE MAS TE GUSTE</p>
                      <ul>
                           <li>SALON NORMAL</li>
                           <li>SALON PREMIUN</li>
                           <li>SALON VIP</li>
                      </ul>
                        <Link to="/reservacion" className={styl.btnOutline}>
                            CONOCE MÁS
                        </Link>
                   </div>
                 </div>
               </div>
             </section>
      </div>
    )
}

export default Seccion_Reservas