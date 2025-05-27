import '../../assets/styles/global.css';
import './style.css'
import Tag from '../../assets/ImgNotas/Tag.svg'
import CircleClock from '../../assets/ImgNotas/Circle Clock.svg'
import { useEffect, useState } from 'react';
import TelaNotas from '../../pages/TelaNotas';

//   const onSaveNote = async () => {
//     const response = await fetch(`http://localhost:3000/notes/${notaSelecionada.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...notaSelecionada,
//         title,
//         description,
//         tags: tags.split(",").map(t => t.trim()),
//         image: "assets/sample.png", // temporário
//         date: new Date().toISOString()
//       })
//     });

//     if (response.ok) {
//       alert("Sucesso!");
//     } else {
//       alert("Erro!");
//     }
//   }


//   const onSaveNoteImg = async () => {
    
//     let formData = new FormData();

//     formData.append("titulo", title);
//     formData.append("description", description);
//     formData.append("tags", tags);
//     formData.append("image", image);

//     const response = await fetch(`http://localhost:3000/notes/${notaSelecionada.id}`, {
//       method: "PUT",
//       headers: {},
//       body: formData
//     });

//     if (response.ok) {
//       alert("Sucesso!");
//     } else {
//       alert("Erro!");
//     }
//   }

function NotaDetalhe({ recebaNota }) {
    const [title, setTitle] = useState("")
    const [tag, setTags] = useState("")
    const [description, setDescription] = useState("")

    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState("")

    const aoAdicionarImagem =  (event) => { 

        const arquivo = event.target.files[0];

        console.log("arquivo", arquivo);

        setImage(arquivo);
        setImageURL(URL.createObjectURL(arquivo));

    }
    useEffect(() => {
        if (recebaNota) {
            setTitle(recebaNota.title);
            setTags(recebaNota.tags.join(", "));
            setDescription(recebaNota.description);

        }
    }, [recebaNota]);
    // Envia atualização da nota para o servidor

    const salvarNota = async () => {
    const response = await fetch(`/${recebaNota.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...recebaNota,
        title,
        description,
        tags: tag.split(",").map(t => t.trim()),
        date: new Date().toISOString()
      })
    });

    if (response.ok) {
        alert("salvo com sucesso")
        window.location.reload()
     
    }else {

      alert("erro ao salvar")
    }
  }

    return (
        <>
            <div className="nota-detalhe">
                <section className="conteudo">
                    <div className="img-conteudo">
                        <label className="image"
                        style={{ backgroundImage: imageURL || `url('${imageURL || '../../TelaNotas/imagens/teset.png'}')`}}
                        > 

                        <input onChange={event => aoAdicionarImagem(event)}  type="file" className="file_input" />
                        </label> 
                    </div>


                    <div className="titulo-conteudo">
                        <input type="text" className="titulo-nota" placeholder='titulo' value={title} onChange={event => setTitle(event.target.value)} />
                    </div>

                    <div className="tags-da-anotacao">
                        <div className="linha-tags">
                            <p className="info-nota"><img src={Tag} />Tags:</p>
                            <input type="text" className="info-dado" placeholder='tag' value={tag} onChange={event => setTags(event.target.value)} />
                        </div>
                        <div className="linha-tags">
                            <p className="info-nota"><img src={CircleClock} />Last edited:</p>
                            <p className="info-dado"> {new Date().toLocaleDateString()} </p>
                        </div>
                    </div>

                    <div className="conteudo-anotacao">
                        <div className="texto-nota">
                            <textarea value={description} onChange={event => setDescription(event.target.value)} />
                        </div>
                    </div>
                </section>

                <div className="botoes-inferior">
                    <button className="botao1" onClick={salvarNota} >Save Note</button>
                    <button className="botao2">Cancel</button>
                </div>
            </div>
        </>
    )
}
export default NotaDetalhe;