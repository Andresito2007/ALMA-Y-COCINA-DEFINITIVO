
import styl from "./estilos.module.css";

function Footer(){
 return(
    <footer className={styl.footer}>
      <div className={styl.footerContainer}>
        <h3 className={styl.footerTitle}>Alma & Cocina</h3>
        <div className={styl.divider}></div>    
        <nav className={styl.footerNav}>
          <a href="#ayuda" className={styl.footerLink}>Ayuda y legales</a>
          <a href="#contacto" className={styl.footerLink}>Contáctanos</a>
          <a href="#cookies" className={styl.footerLink}>Políticas de cookies</a>
          <a href="#privacidad" className={styl.footerLink}>Política de privacidad</a>
          <a href="#terminos" className={styl.footerLink}>Términos y condiciones de uso</a>
        </nav>
        <p className={styl.copyright}>© 2026 Todos los derechos reservados</p>
      </div>
    </footer>

  );
}

export default Footer