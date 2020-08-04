import React from "react";

import "./styles.css";

import wppIcon from "../../assets/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/52253808?s=460&u=25af1bb8f4b29be889f669815a60b811036969ef&v=4"
            alt="Avatar Aleatório"
          />
          <div>
            <strong>Daniel Terra Gomes</strong>
            <span>Desenvolvedor Web</span>
          </div>
        </header>

        <p>
          Bacon ipsum dolor amet meatball pork loin chislic landjaeger, doner
          short ribs ham porchetta turducken boudin. Buffalo swine chislic
          sausage turkey ham hock.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 90,00</strong>
          </p>
          <button type="button">
            <img src={wppIcon} alt="Whatsapp" /> Entrar em contato
          </button>
        </footer>
      </article>
    </>
  );
};

export default TeacherItem;
