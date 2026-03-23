
import { Routes, Route } from "react-router-dom";
import Historia from './componentes/Historia'
import Imagen_principal from './componentes/Imagen_principal'
import Carta from './componentes/Carta';
import Nav from './componentes/Nav';
import Login from './componentes/Login';
import Seccion_Reservas from './componentes/conoce_reservas';
import Footer from './componentes/footer';
import Atencion from './componentes/atencion';
import Reservacion from './componentes/Tipos_Reservaciones'; 
import './index.css';

function App() {
  return (
    <section className="contenerdorPide_Ya">

      {/* NUESTRAS RUTAS , ROUTES EL APARTADO DONDE VA ESTAR TODAS NUESTRAS RUTAS PRINCIPALES Y ESTAS RUTAS SE DEFINEN CON ROUTE */}
      <Routes>
        {/* Página principal , path= nombre de la ruta  , element= lo que se va a mostrar*/}
        <Route path="/" element={
          <>
            <div id="navegacion">
              <Nav></Nav>
            </div>
            <div id="inicio">
              <Imagen_principal />
            </div>
            <div id="historia">
              <Historia />
            </div>
            <div id="carta">
              <Carta />
            </div>
            <div id="tipos-reserva">
              <Seccion_Reservas />
            </div>
            <div id="atencion">
              <Atencion />
            </div>
            <div id="footer">
                <Footer />
            </div>
          </>
        } />
        {/* RUTA: Pagina de Tipos de Reserva */}
        <Route path="/reservacion" element={<Reservacion></Reservacion>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </section>
  );
}

export default App;