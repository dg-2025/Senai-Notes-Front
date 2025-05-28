import '../../assets/styles/global.css';
import Lupa from '../../assets/ImgNotas/lupa.svg';
import Setting from '../../assets/ImgNotas/Setting.svg';
import Vector from '../../assets/ImgNotas/Vector.svg';

function CabecalhoTopo() {
    const irParaConfiguracoes = () => {
        window.location.href = "http://localhost:5173/TelaConfig";
    };

    return (
        <div className="cabecalho-topo">
            <div className="topo-notas">
                <h1>All Notes</h1>
                <div className="painel-pesquisa">
                    <img src={Lupa} alt="Buscar" />
                    <input type="text" placeholder="Search by title, content, or tags…" />

                    <img
                        src={Setting}
                        alt="Configurações"
                        style={{ cursor: "pointer" }}
                        onClick={irParaConfiguracoes}
                    />

                    <img src={Vector} alt="Outros" />
                </div>
            </div>
        </div>
    );
}

export default CabecalhoTopo;
