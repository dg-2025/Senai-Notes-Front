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
    const [notas, setNotas] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getNotas = async () => {
        try {
            let response = await fetch("http://localhost:3000/notas");
            if (response.ok) {
                let json = await response.json();
                setNotas(json);
            } else {
                console.error("Erro ao buscar notas");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    useEffect(() => {
        getNotas();
    }, []);

    return (
        <div className="global-tela">
            <div className="notas-root">
                <main className={`tela ${isMobile ? 'mobile' : 'desktop'}`}>
                    <MenuLateral />
                    <div className={`tela-container ${isMobile ? 'mobile-container' : ''}`}>
                        <CabecalhoTopo />
                        <div
                            className="fundo-conteudo"
                            style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <ListaNotas
                                notas={notas}
                                atualizarNotas={getNotas}
                                vizualisarNota={setNotaSelecionada}
                            />

                            {notaSelecionada == null ? (
                                <h1 className='selecioarnota'>selecione uma nota</h1>
                            ) : (
                                <>
                                    <NotaDetalhe recebaNota={notaSelecionada} />
                                    <AcoesNota
                                        notaSelecionada={notaSelecionada}
                                        aoFecharANota={() => {
                                            setNotaSelecionada(null);
                                            getNotas();
                                        }}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default TelaNotas;
