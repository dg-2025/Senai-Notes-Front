import '../../assets/styles/global.css';
import './style.css';
import Tag from '../../assets/ImgNotas/Tag.svg';
import CircleClock from '../../assets/ImgNotas/Circle Clock.svg';
import { useEffect, useState } from 'react';

function NotaDetalhe({ recebaNota }) {
  const [title, setTitle] = useState("");
  const [tag, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  // Lê imagem do input
  const aoAdicionarImagem = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  // Carrega os dados da nota recebida
  useEffect(() => {
    if (recebaNota) {
      setTitle(recebaNota.titulo || "");
      setTags((recebaNota.etiquetas || []).join(", "));
      setDescription(recebaNota.texto || "");

      if (recebaNota.imagem) {
        setImageURL(`https://apisenainotes404.azurewebsites.net/uploads/${recebaNota.imagem}`);
      } else {
        setImageURL("/imagens/teset.png"); // fallback
      }
    }
  }, [recebaNota]);

  // Salvar alteração da nota
  const salvarNota = async () => {
    const token = localStorage.getItem("meuToken");
    const userId = localStorage.getItem("meuId");

    if (!token || !userId || !recebaNota?.id) {
      alert("Usuário não autenticado ou nota inválida.");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", title);
    formData.append("texto", description);
    formData.append("imagem", image ? image.name : recebaNota.imagem || "imagem.png");
    formData.append("idUsuario", userId);
    formData.append("etiquetas", tag); // a API aceita string separada por vírgula

    // Envia arquivo real ou falso (caso o usuário não altere a imagem)
    if (image) {
      formData.append("arquivoAnotacao", image);
    } else {
      const fakeFile = new Blob([" "], { type: "text/plain" });
      formData.append("arquivoAnotacao", fakeFile, "vazio.txt");
    }

    try {
      const response = await fetch(`https://apisenainotes404.azurewebsites.net/api/Nota/${recebaNota.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          // Não adicione Content-Type com FormData
        },
        body: formData
      });

      if (response.ok) {
        alert("Nota atualizada com sucesso!");
        window.location.reload();
      } else {
        const erro = await response.text();
        alert("Erro ao salvar nota: " + erro);
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro de rede ao tentar salvar a nota.");
    }
  };

  return (
    <div className="nota-detalhe">
      <section className="conteudo">
        <div className="img-conteudo">
          <label
            className="image"
            style={{
              backgroundImage: `url('${imageURL}')`
            }}
          >
            <input
              type="file"
              accept="image/*"
              className="file_input"
              onChange={aoAdicionarImagem}
            />
          </label>
        </div>

        <div className="titulo-conteudo">
          <input
            type="text"
            className="titulo-nota"
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="tags-da-anotacao">
          <div className="linha-tags">
            <p className="info-nota"><img src={Tag} alt="Tag" /> Tags:</p>
            <input
              type="text"
              className="info-dado"
              placeholder="ex: estudo, projeto"
              value={tag}
              onChange={e => setTags(e.target.value)}
            />
          </div>
          <div className="linha-tags">
            <p className="info-nota"><img src={CircleClock} alt="Relógio" /> Última edição:</p>
            <p className="info-dado">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="conteudo-anotacao">
          <div className="texto-nota">
            <textarea
              placeholder="Digite sua anotação aqui..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="botoes-inferior">
        <button className="botao1" onClick={salvarNota}>Salvar Nota</button>
        <button className="botao2" onClick={() => window.history.back()}>Cancelar</button>
      </div>
    </div>
  );
}

export default NotaDetalhe;
