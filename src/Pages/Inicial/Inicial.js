import React from "react";
import "./Inicial.css";
import Timer from "../../components/Timer/Timer";
import imagem from "./imagem.jpeg";

function Inicial() {
  return (
    <>
      <figure className="figura">
        <img src={imagem} alt="" />
        <figcaption>
          Você está convidado ao
          <br />
          CHÁ DE CASA NOVA
          <br />
          &
          <br />
          ANIVERSÁRIO
        </figcaption>
      </figure>
      <Timer />
    </>
  );
}

export default Inicial;
