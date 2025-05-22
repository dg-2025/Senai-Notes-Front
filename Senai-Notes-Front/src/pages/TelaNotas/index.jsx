import './style.css';
import '../../assets/styles/global.css';
import MenuLateral from '../../componentes/menu-lateral';
import CabecalhoTopo from '../../componentes/cabecalho-topo';
import ListaNotas from '../../componentes/lista-notas';
import NotaDetalhe from '../../componentes/nota-detalhe';
import AcoesNota from '../../componentes/acoes-nota';
import { useState } from 'react';

function TelaNotas() {
    const [notaSelecionada, setNotaSelecionada] = useState(null);

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

                                <ListaNotas vizualisarNota={(nota) => setNotaSelecionada(nota)} />
                                {notaSelecionada == null && (
                                    <>
                                    <h1 className='selecioarnota'>selecione uma nota</h1>
                                    </>
                                )

                                }
                                {notaSelecionada != null && (
                                    <>
                                <NotaDetalhe recebaNota={notaSelecionada} />

                                <AcoesNota />
                                    </>

                                )}

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default TelaNotas;