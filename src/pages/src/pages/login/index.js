import React, { useState } from "react";
import { LayoutComponents } from "../../components";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [dados, setDados] = React.useState({
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
      const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (resposta.ok) {
        // Dados enviados com sucesso
        const data = await resposta.json();
        const token = data.token; // Obtém o token da resposta

        // Armazena o token no localStorage
        localStorage.setItem("authToken", token);

        navigate("/veiculos");
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
          <h1>Bem-Vindo</h1>
        </div>
        {erro && <div className="erro">{erro}</div>}{" "}
        {/* Mostra o erro, se houver */}
        <form onSubmit={handleSubmit}>
          <div className="wrap-input">
            <input
              class="has-val input input espacamento"
              type="text"
              name="email"
              placeholder="Email"
              value={dados.email}
              onChange={handleChange}
            />
          </div>
          <div className="wrap-input">
            <input
              class="has-val input input espacamento"
              type="password"
              name="password"
              placeholder="Password"
              value={dados.password}
              onChange={handleChange}
            />
          </div>
          <div class="container-login-form-btn">
            <button class="login-form-btn">Login</button>
          </div>
        </form>
      </div>
    </LayoutComponents>
  );
}

export default Login;
