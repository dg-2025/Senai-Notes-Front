import './style.css';
import '../../assets/styles/global.css';
import { useEffect, useState } from 'react';

function ListaNotas({ vizualisarNota }) {
  const [Notas, setNotas] = useState([]);

  useEffect(() => {
    getNotas();
  }, []);

  const getNotas = async () => {
    const token = localStorage.getItem("meuToken");

    try {
      const response = await fetch("https://apisenainotes404.azurewebsites.net/api/Nota", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const json = await response.json();
        setNotas(json);
      } else {
        alert("Erro ao buscar notas.");
      }
    } catch (error) {
      console.error("Erro ao buscar notas:", error);
    }
  };

  const NovaNota = async () => {
    const token = localStorage.getItem("meuToken");
    const userId = localStorage.getItem("meuId");

    if (!token || !userId) {
      alert("Usuário não autenticado.");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", "Nova anotação");
    formData.append("texto", "Escreva aqui sua descrição");
    formData.append("imagem", "nota.jpg");
    formData.append("idUsuario", parseInt(userId));
    formData.append("etiquetas", "sem-tag");

    const fakeFile = new Blob(["conteúdo de exemplo"], { type: "text/plain" });
    formData.append("arquivoAnotacao", fakeFile, "nota.txt");

    try {
      const response = await fetch("https://apisenainotes404.azurewebsites.net/api/Nota", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        alert("Nota criada com sucesso!");
        await getNotas();
      } else {
        const text = await response.text();
        alert("Erro ao criar nota: " + text);
      }
    } catch (error) {
      console.error("Erro ao criar nota:", error);
      alert("Erro de rede.");
    }
  };

  return (
    <nav className="lista-notas">
      <button className="Create-New-Note" onClick={NovaNota}>Nova Nota</button>
      <section className="conteiner-notas">
        {Notas.map(nota => (
          <div className="nota-item" key={nota.id} onClick={() => vizualisarNota(nota)}>
            <div className="img-nota"></div>
            <div className="info-notas">
              <h1>{nota.titulo}</h1>
              <div className="tags-info-notas">
                <p>{(nota.etiquetas || []).join(", ")}</p>
              </div>
              <p className="data">{new Date(nota.dataCriacao || nota.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </section>
    </nav>
  );
}

export default ListaNotas;
