import React, { useState } from "react";
import supabase from "../external/supabaseConfig";
import SeletorDePorcentagem from "../services/seletorDePorcentagem";

export default function CriarOrcamento() {
  const [processador, setProcessador] = useState("");
  const [processadorCusto, setProcessadorCusto] = useState(0);
  const [processadorQuantidade, setProcessadorQuantidade] = useState(1);

  const [memoriaRam, setMemoriaRam] = useState("");
  const [memoriaRamCusto, setMemoriaRamCusto] = useState(0);
  const [memoriaRamQuantidade, setMemoriaRamQuantidade] = useState(1);

  const [placaMae, setPlacaMae] = useState("");
  const [placaMaeCusto, setPlacaMaeCusto] = useState(0);
  const [placaMaeQuantidade, setPlacaMaeQuantidade] = useState(1);

  const [armazenamento, setArmazenamento] = useState("");
  const [armazenamentoCusto, setArmazenamentoCusto] = useState(0);
  const [armazenamentoQuantidade, setArmazenamentoQuantidade] = useState(1);

  const [gabinete, setGabinete] = useState("");
  const [gabineteCusto, setGabineteCusto] = useState(0);
  const [gabineteQuantidade, setGabineteQuantidade] = useState(1);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from("orcamentos") // Certifique-se de que a tabela corresponda à sua estrutura
      .insert([
        {
          processador,
          processadorCusto,
          processadorQuantidade,
          memoriaRam,
          memoriaRamCusto,
          memoriaRamQuantidade,
          placaMae,
          placaMaeCusto,
          placaMaeQuantidade,
          armazenamento,
          armazenamentoCusto,
          armazenamentoQuantidade,
          gabinete,
          gabineteCusto,
          gabineteQuantidade,
          valorTotal,
          valorAV,
        },
      ]);

    if (error) {
      console.error("Erro ao inserir", error);
    } else {
      console.log("Dados inseridos com sucesso", data);
      // Limpa os campos
      setProcessador("");
      setProcessadorCusto(0);
      setProcessadorQuantidade(1);

      setMemoriaRam("");
      setMemoriaRamCusto(0);
      setMemoriaRamQuantidade(1);

      setPlacaMae("");
      setPlacaMaeCusto(0);
      setPlacaMaeQuantidade(1);

      setArmazenamento("");
      setArmazenamentoCusto(0);
      setArmazenamentoQuantidade(1);

      setGabinete("");
      setGabineteCusto(0);
      setGabineteQuantidade(1);

      setValorTotal(0);
      setValorAV(0);
    }
  };

  const soma =
    setProcessadorCusto * setProcessadorQuantidade +
    setPlacaMaeCusto * setPlacaMaeQuantidade +
    setArmazenamentoCusto * setArmazenamentoQuantidade +
    setMemoriaRamCusto * setMemoriaRamQuantidade +
    setGabineteCusto * setGabineteQuantidade;

  const somaLucro = (soma * lucro) / 100;
  const valorFinal = somaLucro + soma;
  const somaDesconto = (desconto * valorFinal) / 100; 
  const valorAV = valorFinal + somaDesconto;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Dados do Processador</legend>
        <label>
          Processador:
          <input
            type="text"
            value={processador}
            onChange={(e) => setProcessador(e.target.value)}
          />
        </label>
        <label>
          Custo:
          <input
            type="number"
            value={processadorCusto}
            onChange={(e) => setProcessadorCusto(Number(e.target.value))}
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            value={processadorQuantidade}
            onChange={(e) => setProcessadorQuantidade(Number(e.target.value))}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dados da Placa-mãe</legend>
        <label>
          Placa-mãe:
          <input
            type="text"
            value={placaMae}
            onChange={(e) => setPlacaMae(e.target.value)}
          />
        </label>
        <label>
          Custo:
          <input
            type="number"
            value={placaMaeCusto}
            onChange={(e) => setPlacaMaeCusto(Number(e.target.value))}
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            value={placaMaeQuantidade}
            onChange={(e) => setPlacaMaeQuantidade(Number(e.target.value))}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dados da Memória RAM</legend>
        <label>
          Memória RAM:
          <input
            type="text"
            value={memoriaRam}
            onChange={(e) => setMemoriaRam(e.target.value)}
          />
        </label>
        <label>
          Custo:
          <input
            type="number"
            value={memoriaRamCusto}
            onChange={(e) => setMemoriaRamCusto(Number(e.target.value))}
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            value={memoriaRamQuantidade}
            onChange={(e) => setMemoriaRamQuantidade(Number(e.target.value))}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dados do Armazenamento</legend>
        <label>
          Armazenamento:
          <input
            type="text"
            value={armazenamento}
            onChange={(e) => setArmazenamento(e.target.value)}
          />
        </label>
        <label>
          Custo:
          <input
            type="number"
            value={armazenamentoCusto}
            onChange={(e) => setArmazenamentoCusto(Number(e.target.value))}
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            value={armazenamentoQuantidade}
            onChange={(e) => setArmazenamentoQuantidade(Number(e.target.value))}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dados do Gabinete</legend>
        <label>
          Gabinete:
          <input
            type="text"
            value={gabinete}
            onChange={(e) => setGabinete(e.target.value)}
          />
        </label>
        <label>
          Custo:
          <input
            type="number"
            value={gabineteCusto}
            onChange={(e) => setGabineteCusto(Number(e.target.value))}
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            value={gabineteQuantidade}
            onChange={(e) => setGabineteQuantidade(Number(e.target.value))}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend> Margem de lucro: </legend>
        <SeletorDePorcentagem
            value={lucro}
            onChange={(value) => ("lucro", value)}
        /> 
      </fieldset>

      <fieldset>
        <legend> Porcentagem de Desconto: </legend>
        <SeletorDePorcentagem
            value={desconto}
            onChange={(value) => ("desconto", value)}
        /> 
      </fieldset>


      <button type="submit">Enviar</button>
    </form>
  );
}
