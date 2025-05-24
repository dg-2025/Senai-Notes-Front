import './style.css';
import '../../assets/styles/global.css';
import MenuLateral from '../../componentes/menu-lateral';
import CabecalhoTopo from '../../componentes/cabecalho-topo';
import ListaNotas from '../../componentes/lista-notas';
import NotaDetalhe from '../../componentes/nota-detalhe';
import AcoesNota from '../../componentes/acoes-nota';
import { useState, useEffect } from 'react';

function TelaNotas() {
    const [notaSelecionada, setNotaSelecionada] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="global-tela">
                <div className="notas-root">
                    <main className={`tela ${isMobile ? 'mobile' : 'desktop'}`}>
                        <MenuLateral />

                        {/* ÁREA PRINCIPAL */}
                        <div className={`tela-container ${isMobile ? 'mobile-container' : ''}`}>
                            <CabecalhoTopo />
                            <div 
                                className="fundo-conteudo" 
                                style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <ListaNotas vizualisarNota={(nota) => setNotaSelecionada(nota)} />

                                {notaSelecionada == null ? (
                                    <h1 className='selecioarnota'>selecione uma nota</h1>
                                ) : (
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
