import React from "react";

function Signup() {
  const [dados, setDados] = React.useState({
    name: "",
    email: "",
    password: "",
  });
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
        console.error("Erro ao enviar dados" + resposta.status);
      }
    } catch (erro) {
      console.error("Erro na solicitação:", erro);
    }
  };

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={dados.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={dados.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={dados.password}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Signup;
