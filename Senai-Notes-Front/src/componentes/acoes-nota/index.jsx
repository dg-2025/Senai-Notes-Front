import './style.css';
import '../../assets/styles/global.css';
import Archive from '../../assets/ImgNotas/Archive.svg'
import Delete from '../../assets/ImgNotas/Delete.svg'





function AcoesNota() {
    return (
        <>
            <div className="acoes-nota">
                <div className="caixa-botoes">
                    <button className="botao"><img src={Archive} />Archive Note</button>
                    <button className="botao"><img src={Delete} />Delete Note</button>
                </div>
            </div>

        </>
    )
}
export default AcoesNota;