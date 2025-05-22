import './style.css';
import '../../assets/styles/global.css';
import { useEffect, useState } from 'react';



function ListaNotas({ vizualisarNota }) {



    const [Notas, setNotas] = useState([]);


    useEffect(() => {

        getNotas();

    }, []);

    const getNotas = async () => {

        let response = await fetch("http://localhost:3000/notas")

        if (response.ok == true) {
            let json = await response.json()

            setNotas(json);
        }
    }
    const NovaNota = async () => {

        const response = await fetch("http://localhost:3000/notas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: "1",                          // ID fixo de usuário por enquanto
                title: "Nova anotação",               // Título padrão
                description: "Escreva aqui sua descrição", // Descrição padrão
                tags: [],                             // Sem tags iniciais
                image: "assets/sample.png",           // Imagem padrão
                date: new Date().toISOString()        // Data atual em ISO
            })
        });

        if (response.ok) {
            alert("criado com sucesso")
            await getNotas ();
        } else {
            alert("não criado")
        }
    }


    return (
        <>
            <nav className="lista-notas">
                <button className="Create-New-Note" onClick={NovaNota}>Nova Nota</button>
                <section className="conteiner-notas">

                    {Notas.map(nota => (

                        <div className="nota-item" onClick={() => vizualisarNota(nota)}>
                            <div className="img-nota"></div>
                            <div className="info-notas">
                                <h1>{nota.title}</h1>
                                <div className="tags-info-notas">
                                    <p>{nota.tags}</p>
                                </div>
                                <p className="data">{nota.date}</p>
                            </div>
                        </div>

                    ))}

                </section>
            </nav>
        </>
    )
}
export default ListaNotas;