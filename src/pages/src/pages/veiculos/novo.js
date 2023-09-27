import React, { useState, useEffect } from "react";
import { LayoutComponents } from "../../components";

function NovoVeiculoPage() {
  const [dados, setDados] = useState({
    modeloId: "",
    status: "",
    placa: "",
    renavam: "",
    chassi: "",
  });

  const [erro, setErro] = useState(null);
  const [modelos, setModelos] = useState([]);
  const [userData, setUserData] = useState(null); // Armazena os dados do usuário

  useEffect(() => {
    // Função para buscar os dados do usuário com base no token
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
          .then((response) => {
            console.log("Status da resposta:", response.status);
            return response.json();
          })
          .then((data) => {
            console.log("Dados obtidos:", data);
          })
          .catch((error) => {
            console.error("Erro na solicitação:", error);
          });

        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          console.error("Erro ao obter dados do usuário", response.status);
        }
      } catch (error) {
        console.error("Erro na solicitação:", error);
      }
    };

    // Chame a função para buscar os dados do usuário
    fetchUserData();

    // Faça uma solicitação ao seu endpoint para obter os modelos do usuário logado
    fetch("http://localhost:3000/modelo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setModelos(data))
      .catch((error) => console.error("Erro ao obter modelos:", error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/veiculo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (resposta.ok) {
        // Dados enviados com sucesso
        console.log("Dados enviados com sucesso!");
        // Redirecionar para outra página ou fazer alguma ação
      } else {
        const erroJson = await resposta.json();
        setErro(erroJson.message);
        console.error("Erro ao enviar dados", resposta.status);
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
          <h1>Novo Veículo</h1>
        </div>
        {erro && <div className="erro">{erro}</div>}
        {userData && (
          <div>
            <p>Usuário Logado: {userData.name}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="wrap-input">
            <select
              name="modeloId"
              value={dados.modeloId}
              onChange={handleChange}
            >
              <option value="">Selecione um modelo</option>
              {modelos.map((modelo) => (
                <option key={modelo.id} value={modelo.id}>
                  {modelo.nome} - {modelo.ano}
                </option>
              ))}
            </select>
          </div>
          <div className="wrap-input">
            <input
              class="has-val input input espacamento"
              type="text"
              name="placa"
              placeholder="Placa"
              value={dados.placa}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Placa"></span>
          </div>
          <div className="wrap-input">
            <input
              class="has-val input input espacamento"
              type="text"
              name="chassi"
              placeholder="Chassi"
              value={dados.chassi}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Chassi"></span>
          </div>
          <div className="wrap-input">
            <input
              class="has-val input input espacamento"
              type="text"
              name="renavam"
              placeholder="Renavam"
              value={dados.renavam}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Renavam"></span>
          </div>
          <button class="login-form-btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </LayoutComponents>
  );
}

export default NovoVeiculoPage;
