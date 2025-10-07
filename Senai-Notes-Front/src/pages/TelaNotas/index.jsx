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

    // 🔁 Detectar tamanho da tela
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 🔁 Buscar notas do usuário logado
    const getNotas = async () => {
        const email = localStorage.getItem("meuId");
        const token = localStorage.getItem("meuToken");

        if (!email || !token) {
            alert("Usuário não autenticado.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/api/notas/nota-por-email/${email}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                const json = await response.json();
                setNotas(json);
            } else {
                const error = await response.text();
                console.error("Erro ao buscar notas:", error);
                alert("Erro ao carregar notas.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na conexão com o servidor.");
        }
    };

    // Carregar notas ao abrir tela
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
                                <h1 className='selecioarnota'>Selecione uma nota</h1>
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
