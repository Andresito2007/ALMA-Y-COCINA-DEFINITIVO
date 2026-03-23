


function Carta() {
  return (
    <section className="carta-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h1 className="mb-4 text-primary">CARTA DE ALMA & COCINA</h1>
            <p>
              Tenemos una mision de una visión contemporánea de nuestra cocina
               que agradece su historia y que apuesta por la creatividad en todas sus formas.
            </p>
            <ul>
              <li>Carta</li>
              <li>Postres Peruanos</li>
              <li>Vinos</li>
              <li>Bebidas</li>
              <li>Menú</li>
              <li>Menú degustación</li>
            </ul>
          </div>
          <div className={`col-md-7 mb-4 mb-md-0 `}>
            <img
              src="https://previews.123rf.com/images/igorr/igorr1604/igorr160400193/55970349-jamon-cheese-and-grapes-with-red-wine.avif"
              alt="CARTA DE ALMA Y COCINA"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carta