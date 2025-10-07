import './style.css';
import '../../assets/styles/global.css';
import { useEffect, useState } from 'react';

function ListaNotas({ vizualisarNota }) {
    const [Notas, setNotas] = useState([]);

    const token = localStorage.getItem("meuToken");
    const userId = localStorage.getItem("meuId");

    // 🔁 Buscar notas do usuário logado
    const getNotas = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/notas/buscarporid/${userId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                const json = await response.json();
                setNotas(json);
                console.log("📋 Notas recebidas:", json); // ✅ mostra o formato completo no console
            } else {
                console.error("Erro ao buscar notas");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    useEffect(() => {
        getNotas();
    }, []);

    // ➕ Criar nova nota
    const NovaNota = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/notas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    idUsuario: parseInt(userId),
                    titulo: "Nova anotação",
                    descricao: "Escreva aqui sua descrição",
                    tags: [],
                    imagem: "",
                    arquivado: false
                })
            });

            if (response.ok) {
                alert("Nota criada com sucesso!");
                await getNotas();
            } else {
                alert("Erro ao criar nota.");
            }
        } catch (error) {
            console.error("Erro ao criar nota:", error);
        }
    };

    return (
        <nav className="lista-notas">
            <button className="Create-New-Note" onClick={NovaNota}>Nova Nota</button>
            <section className="conteiner-notas">
                {Notas.map(nota => {
                    console.log("🧩 Nota individual:", nota); // ✅ mostra o id real (id ou idNota)
                    
                    return (
                        <div
                            key={nota.id || nota.idNota} // ✅ evita key duplicada
                            className="nota-item"
                            onClick={() => {
                                const idCorrigido = {
                                    ...nota,
                                    id: nota.id || nota.idNota // ✅ garante que sempre terá id
                                };
                                vizualisarNota(idCorrigido);
                            }}
                        >
                            <div className="img-nota">
                                <img
                                    src={nota.imagem || "assets/sample.png"}
                                    alt="Nota"
                                    className="miniatura-nota"
                                />
                            </div>
                            <div className="info-notas">
                                <h1>{nota.titulo}</h1>
                                <div className="tags-info-notas">
                                    <p>{(nota.tags || []).join(", ")}</p>
                                </div>
                                <p className="data">
                                    {new Date(nota.ultimaEdicao || nota.dataCriacao).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </nav>
    );
}

export default ListaNotas;
