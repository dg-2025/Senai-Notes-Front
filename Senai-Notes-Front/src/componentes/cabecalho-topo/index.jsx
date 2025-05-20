
import '../../assets/styles/global.css';
import Lupa from '../../assets/ImgNotas/Lupa.svg'
import Setting from '../../assets/ImgNotas/Setting.svg'
import Vector from '../../assets/ImgNotas/Vector.svg'


function CabecalhoTopo() {
    return (
        <>
            <div className="cabecalho-topo">
                <div className="topo-notas">
                    <h1>All Notes</h1>
                    <div className="painel-pesquisa">
                        <img src={Lupa} />
                        <input type="text" placeholder="Search by title, content, or tags…" />
                        <img src={Setting} />
                        <img src={Vector} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CabecalhoTopo;