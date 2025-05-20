import './style.css';
import '../../assets/styles/global.css';
import Lupa from '../../assets/ImgNotas/Lupa.svg'
import Setting from '../../assets/ImgNotas/Setting.svg'
import Vector from '../../assets/ImgNotas/Vector.svg'
import MenuLateral from '../../componentes/menu-lateral';





function TelaConfig() {
    return (
        <>
            <div className="global-tela">
                <div className="notas-root">
                    <main className="tela">
                        {/* MENU LATERAL */}
                        <MenuLateral />

                        {/* ÁREA PRINCIPAL */}
                        <div className="tela-container">
                            <div className="cabecalho-topo">
                                <div className="topo-notas">
                                    <h1>Settings</h1>
                                    <div className="painel-pesquisa">
                                        <img src={Lupa} />
                                        <input type="text" placeholder="Search by title, content, or tags…" />
                                        <img src={Setting} />
                                        <img src={Vector} />
                                    </div>
                                </div>
                            </div>

                            <div className="fundo-conteudo">
                                <div className="secao-lateral">
                                    <section className="caixa-botoes-config">
                                        <div className="cartao-config">
                                            <button>Color Theme</button>
                                            <button>Font Theme</button>
                                            <button>Change Password</button>
                                            <div className="linha-divisoria"></div>
                                            <button>Logout</button>
                                        </div>
                                    </section>
                                </div>

                                <div className="opcoes-detalhe">
                                    <section className="conteudo">
                                        <div className="caixa-opcoes">
                                            <h2>Color Theme</h2>
                                            <p>Choose your color theme:</p>
                                            <div className="botao-opcao">
                                                <button>Light Mode</button>
                                                <p>Pick a clean and classic light theme</p>
                                            </div>
                                            <div className="botao-opcao">
                                                <button>Dark Mode</button>
                                                <p>Select a sleek and modern dark theme</p>
                                            </div>
                                            <div className="botao-opcao">
                                                <button>System</button>
                                                <p>Adapts to your device’s theme</p>
                                            </div>
                                            <button className="botao-aplicar">Apply Changes</button>
                                        </div>
                                    </section>
                                </div>

                                <div className="acoes-nota"></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default TelaConfig;