import '../../assets/styles/global.css';
import './style.css';
import TagIcon from '../../assets/ImgNotas/Tag.svg';
import CircleClock from '../../assets/ImgNotas/Circle Clock.svg';
import { useEffect, useState } from 'react';

function NotaDetalhe({ recebaNota }) {
    const [titulo, setTitulo] = useState("");
    const [tagsTexto, setTagsTexto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagemBase64, setImagemBase64] = useState("");

    const token = localStorage.getItem("meuToken");
    const userId = localStorage.getItem("meuId");

    useEffect(() => {
        if (recebaNota) {
            setTitulo(recebaNota.titulo || "");
            setTagsTexto((recebaNota.tags || []).join(", "));
            setDescricao(recebaNota.descricao || "");
            setImagemBase64(recebaNota.imagem || "");
        }
    }, [recebaNota]);

    const aoAdicionarImagem = (event) => {
        const arquivo = event.target.files[0];
        if (!arquivo) return;

        const leitor = new FileReader();
        leitor.onloadend = () => {
            setImagemBase64(leitor.result);
        };
        leitor.readAsDataURL(arquivo);
    };

    const salvarNota = async () => {
        const url = recebaNota?.id
            ? `http://localhost:8080/api/notas/${recebaNota.id}`
            : `http://localhost:8080/api/notas`;

        const metodo = recebaNota?.id ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method: metodo,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    idUsuario: parseInt(userId),
                    titulo,
                    descricao,
                    imagem: imagemBase64 || "",
                    tags: tagsTexto.split(",").map(t => t.trim()),
                    arquivado: recebaNota?.arquivado || false
                })
            });

            if (response.ok) {
                alert("Nota salva com sucesso!");
                window.location.reload();
            } else {
                const errorText = await response.text();
                alert("Erro ao salvar nota: " + errorText);
            }
        } catch (err) {
            alert("Erro de rede: " + err.message);
        }
    };

    return (
        <div className="nota-detalhe">
            <section className="conteudo">
                <label className="img-conteudo">
                    <img
                        src={imagemBase64 || "assets/sample.png"}
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
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                </div>

                <div className="tags-da-anotacao">
                    <div className="linha-tags">
                        <p className="info-nota"><img src={TagIcon} alt="" /> Tags:</p>
                        <input
                            type="text"
                            className="info-dado"
                            placeholder="tag1, tag2"
                            value={tagsTexto}
                            onChange={e => setTagsTexto(e.target.value)}
                        />
                    </div>
                    <div className="linha-tags">
                        <p className="info-nota"><img src={CircleClock} alt="" /> Última edição:</p>
                        <p className="info-dado">
                            {recebaNota?.ultimaEdicao
                                ? new Date(recebaNota.ultimaEdicao).toLocaleDateString()
                                : "Agora"}
                        </p>
                    </div>
                </div>

                <div className="conteudo-anotacao">
                    <p className="texto-nota">
                        <textarea
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        />
                    </p>
                </div>
            </section>

            <div className="botoes-inferior">
                <button className="botao1" onClick={salvarNota}>Salvar nota</button>
                <button className="botao2" onClick={() => window.location.reload()}>Cancelar</button>
            </div>
        </div>
    );
}

export default NotaDetalhe;
