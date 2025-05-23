
import '../../assets/styles/global.css';
import './style.css'
import Tag from '../../assets/ImgNotas/Tag.svg'
import CircleClock from '../../assets/ImgNotas/Circle Clock.svg'
import { useEffect, useState } from 'react';


function NotaDetalhe({recebaNota}) {
    const [title, setTitle] = useState("")
    const [tag, setTags] = useState("")
    const [description, setDescription] = useState("")
    // const [imageURL, setImageURL] = useState("")

    
    useEffect(() => {
        if (recebaNota) {
            setTitle(recebaNota.title);
            setTags(recebaNota.tags.join(", "));
            setDescription(recebaNota.description);

        }
    }, [recebaNota]);
      // Envia atualização da nota para o servidor
//   const salvarNota = async () => {
//     const response = await fetch(`http://localhost:3000/notes/${notaSelecionada.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...notaSelecionada,
//         title,
//         description,
//         tags: tags.split(",").map(t => t.trim()),
//         date: new Date().toISOString()
//       })
//     });
    return (
        <>
            <div className="nota-detalhe">
                <section className="conteudo">
                    <div className="img-conteudo"></div>
                    

                    <div className="titulo-conteudo">
                        <input type="text" className="titulo-nota" placeholder='titulo' value = {title} onChange={event => setTitle(event.target.value)} />
                    </div>

                    <div className="tags-da-anotacao">
                        <div className="linha-tags">
                            <p className="info-nota"><img src={Tag} />Tags:</p>
                            <input type="text" className="info-dado" placeholder='tag' value = {tag} onChange={event => setTags(event.target.value)} />
                        </div>
                        <div className="linha-tags">
                            <p className="info-nota"><img src={CircleClock} />Last edited:</p>
                            <p className="info-dado"> {new Date().toLocaleDateString()} </p>
                        </div>
                    </div>

                    <div className="conteudo-anotacao">
                        <p className="texto-nota">
                            <textarea value={description} onChange={event => setDescription(event.target.value)}/>
                        </p>
                    </div>
                </section>

                <div className="botoes-inferior">
                    <button className="botao1">Save Note</button>
                    <button className="botao2">Cancel</button>
                </div>
            </div>
        </>
    )
}
export default NotaDetalhe;