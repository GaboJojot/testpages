import "./about.css";

export const About = () => {
  return (
    <div className="container-about">
      <h1>Sobre Global Consulting IGR</h1>

      <p>
        PyMe argentina dedicada al asesoramiento técnico en materia de comercio
        exterior. De manera didáctica pretendemos hacer llegar a los clientes o
        potenciales clientes todos aquellos contenidos que les permitan obtener
        los conocimientos necesarios para la toma de decisiones en materia de comercio exterior.
      </p>
      <hr />
      <h3>Objetivo General</h3>
      <p>
        Generar valor comercial a una empresa que quiera aventurarse en este
        lindo proceso que se llama "Internacionalización de empresa".
      </p>
      <h3>Objetivos específicos:</h3>
      <ul>
        <li>
          Brindar herramientas para el cálculo de precios de
          exportación/importación.
        </li>
        <li>Ofrecer respaldo técnico en áreas específicas.</li>
        <li>Asesoría legal en lo que correspondiese.</li>
        <li>Estrechar la relación entre cliente/proveedor.</li>
        <li>Enseñar tips sobre el mercado al que se quiere apuntar.</li>
      </ul>
      <hr />
      <img src={`../src/assets/img/pexels-andrea-piacquadio-3769138.PNG`} />
    </div>
  );
};
