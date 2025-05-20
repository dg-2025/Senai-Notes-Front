import './style.css';
import '../../assets/styles/global.css';
import MenuLateral from '../../componentes/menu-lateral';
import CabecalhoTopo from '../../componentes/cabecalho-topo';
import ListaNotas from '../../componentes/lista-notas';
import NotaDetalhe from '../../componentes/nota-detalhe';
import AcoesNota from '../../componentes/acoes-nota';

function TelaNotas() {
    return (
        <>
            <div className="global-tela">
                <div className="notas-root">
                    <main className="tela">
                        <MenuLateral />

                        {/* ÁREA PRINCIPAL */}
                        <div className="tela-container">
                            <CabecalhoTopo />
                            <div className="fundo-conteudo">
                                
                                <ListaNotas />

                                <NotaDetalhe />

                               <AcoesNota />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default TelaNotas;