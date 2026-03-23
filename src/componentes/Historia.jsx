
import styl from "./estilos.module.css";

function Historia() {
  return (
    <section className="historia-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-7 mb-4 mb-md-0 ${styl.miEstilo}`}>
            <img
              src="https://static-otelico.com/cache/hotel_de_france/w2500/Belossi.jpg"
              alt="Nuestra Historia"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-5">
            <h1 className="mb-4 text-primary">NUESTRA HISTORIA</h1>
            <p>
              Nuestro restaurante nació con la pasión de ofrecer una experiencia
              gastronómica rapida. Desde nuestros inicios, hemos trabajado poniendo
              el alma a nuestras comidas de la mejor calidad y Cada plato cuenta una historia,
              combinando tradición e innovación para crear sabores inolvidables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Historia;