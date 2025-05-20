
import '../../assets/styles/global.css';
import './style.css'
import Tag from '../../assets/ImgNotas/Tag.svg'
import CircleClock from '../../assets/ImgNotas/Circle Clock.svg'


function NotaDetalhe() {
    return (
        <>
            <div className="nota-detalhe">
                <section className="conteudo">
                    <div className="img-conteudo"></div>
                    

                    <div className="titulo-conteudo">
                        <input type="text" className="titulo-nota" placeholder='titulo' />
                    </div>

                    <div className="tags-da-anotacao">
                        <div className="linha-tags">
                            <p className="info-nota"><img src={Tag} />Tags:</p>
                            <input type="text" className="info-dado" placeholder='tag' />
                        </div>
                        <div className="linha-tags">
                            <p className="info-nota"><img src={CircleClock} />Last edited:</p>
                            <p className="info-dado"> {new Date().toLocaleDateString()} </p>
                        </div>
                    </div>

                    <div className="conteudo-anotacao">
                        <p className="texto-nota">
                            <textarea/>
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