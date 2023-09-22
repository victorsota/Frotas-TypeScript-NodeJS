import React, { useState } from "react";
import { LayoutComponents } from "../../components";

function Signup() {
  const [dados, setDados] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [erro, setErro] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(dados);
    try {
      const resposta = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      if (resposta.ok) {
        // Dados enviados com sucesso
        console.log("Dados enviados com sucesso!" + resposta.json());
      } else {
        const erroJson = await resposta.json();
        setErro(erroJson.message);
        console.error("Erro ao enviar dados" + resposta.status);
      }
    } catch (erro) {
      setErro("Erro na solicitação");
      console.error("Erro na solicitação:", erro);
    }
  };

  return (
    <LayoutComponents>
      <div>
        <div class="centraliza">
          <h1>Cadastre-se</h1>
        </div>
        {erro && <div className="erro">{erro}</div>}{" "}
        {/* Mostra o erro, se houver */}
        <form onSubmit={handleSubmit}>
          <div className="wrap-input">
            <input
              class="has-val input input espacamento"
              type="text"
              name="name"
              placeholder="Name"
              value={dados.name}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>
          <div className="wrap-input">
            <input
              class="has-val input espacamento"
              type="email"
              name="email"
              placeholder="Email"
              value={dados.email}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-input">
            <input
              class="has-val input espacamento"
              type="password"
              name="password"
              placeholder="password"
              value={dados.password}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>
          <button class="login-form-btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </LayoutComponents>
  );
}

export default Signup;
