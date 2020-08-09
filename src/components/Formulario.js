import React, { useState, Fragment } from "react";
import { CSVLink } from "react-csv";
//import Error from "./Error";
import { crearFolios } from "../helpers";

const Formulario = () => {
  const [parametros, setParametros] = useState({
    desde: null,
    hasta: null,
    moldes: null,
  });

  const [folios, setFolios] = useState();

  //Manejando input de usuario

  const handleChange = (e) => {
    setParametros({ ...parametros, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { desde, hasta, moldes } = parametros;
    setFolios(crearFolios(desde, hasta, moldes));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="desde">Desde: </label>
          <input type="text" name="desde" id="desde" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="hasta">Hasta: </label>
          <input type="text" name="hasta" id="hasta" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="moldes">Moldes: </label>
          <input
            type="text"
            name="moldes"
            id="moldes"
            onChange={handleChange}
          />
        </div>
        <button>Generar</button>
        {folios ? (
          <CSVLink data={folios} enclosingCharacter={``}>
            Descargar
          </CSVLink>
        ) : null}
      </form>
    </Fragment>
  );
};

export default Formulario;
