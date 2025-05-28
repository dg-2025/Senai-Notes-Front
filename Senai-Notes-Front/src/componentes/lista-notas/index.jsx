import './style.css';
import '../../assets/styles/global.css';
import { useEffect, useState } from 'react';

function ListaNotas({ vizualisarNota }) {
    const [Notas, setNotas] = useState([]);

    useEffect(() => {
        getNotas();
    }, []);

    const getNotas = async () => {
        try {
            const response = await fetch("http://localhost:3000/notas");
            if (response.ok) {
                const json = await response.json();
                setNotas(json);
            } else {
                console.error("Erro ao buscar notas");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    const NovaNota = async () => {
        try {
            const response = await fetch("http://localhost:3000/notas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: "1",
                    title: "Nova anotação",
                    description: "Escreva aqui sua descrição",
                    tags: [],
                    image: "assets/sample.png",
                    date: new Date().toISOString()
                })
            });

            if (response.ok) {
                alert("Criado com sucesso!");
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
                {Notas.map(nota => (
                    <div key={nota.id} className="nota-item" onClick={() => vizualisarNota(nota)}>
                        <div className="img-nota">
                            <img
                                src={nota.image || "assets/sample.png"}
                                alt="Nota"
                                className="miniatura-nota"
                            />
                        </div>
                        <div className="info-notas">
                            <h1>{nota.title}</h1>
                            <div className="tags-info-notas">
                                <p>{(nota.tags || []).join(", ")}</p>
                            </div>
                            <p className="data">{new Date(nota.date).toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </section>
        </nav>
    );
}

export default ListaNotas;
