import React, { useEffect, useState } from "react";

function VeiculosList() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    // Faça uma solicitação GET para o seu endpoint /veiculos
    fetch("http://localhost:3000/veiculos")
      .then((response) => response.json())
      .then((data) => setVeiculos(data))
      .catch((error) => console.error("Erro ao obter veículos:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Veículos</h2>
      <ul>
        {veiculos.map((veiculo) => (
          <li key={veiculo.id}>
            Placa: {veiculo.placa}, Chassi: {veiculo.chassi}, Renavam:{" "}
            {veiculo.renavam}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VeiculosList;
