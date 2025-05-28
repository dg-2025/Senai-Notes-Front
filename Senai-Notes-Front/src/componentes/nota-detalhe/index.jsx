import '../../assets/styles/global.css';
import './style.css';
import Tag from '../../assets/ImgNotas/Tag.svg';
import CircleClock from '../../assets/ImgNotas/Circle Clock.svg';
import { useEffect, useState } from 'react';

function NotaDetalhe({ recebaNota }) {
    const [title, setTitle] = useState("");
    const [tag, setTags] = useState("");
    const [description, setDescription] = useState("");
    const [imageBase64, setImageBase64] = useState("");

    useEffect(() => {
        if (recebaNota) {
            setTitle(recebaNota.title);
            setTags(recebaNota.tags.join(", "));
            setDescription(recebaNota.description);
            setImageBase64(recebaNota.image); // carrega imagem já salva
        }
    }, [recebaNota]);

    const aoAdicionarImagem = (event) => {
        const arquivo = event.target.files[0];
        if (!arquivo) return;

        const leitor = new FileReader();
        leitor.onloadend = () => {
            setImageBase64(leitor.result); // salva como base64
        };

        leitor.readAsDataURL(arquivo);
    };

    const salvarNota = async () => {
        const response = await fetch(`http://localhost:3000/notas/${recebaNota.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...recebaNota,
                title,
                description,
                tags: tag.split(",").map(t => t.trim()),
                image: imageBase64 || recebaNota.image || "assets/sample.png",
                date: new Date().toISOString()
            })
        });

        if (response.ok) {
            alert("Salvo com sucesso");
            window.location.reload(); // força ListaNotas a recarregar
        } else {
            alert("Erro ao salvar");
        }
    };

    return (
        <div className="nota-detalhe">
            <section className="conteudo">
                <label className="img-conteudo">
                    <img
                        src={imageBase64 || "assets/sample.png"}
                        alt="Imagem da nota"
                        className="img-preview"
                    />
                    <input type="file" onChange={aoAdicionarImagem} />
                </label>

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
                        <p className="info-nota"><img src={Tag} /> Tags:</p>
                        <input
                            type="text"
                            className="info-dado"
                            placeholder="tag"
                            value={tag}
                            onChange={e => setTags(e.target.value)}
                        />
                    </div>
                    <div className="linha-tags">
                        <p className="info-nota"><img src={CircleClock} /> Última edição:</p>
                        <p className="info-dado">{new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="conteudo-anotacao">
                    <p className="texto-nota">
                        <textarea value={description} onChange={e => setDescription(e.target.value)} />
                    </p>
                </div>
            </section>

            <div className="botoes-inferior">
                <button className="botao1" onClick={salvarNota}>Salvar nota</button>
                <button className="botao2">Cancelar</button>
            </div>
        </div>
    );
}

export default NotaDetalhe;
