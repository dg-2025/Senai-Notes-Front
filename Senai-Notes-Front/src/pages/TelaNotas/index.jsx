import './style.css';
import '../../assets/styles/global.css';
import Archive from '../../assets/ImgNotas/Archive.svg'
import Home from '../../assets/ImgNotas/Home.svg'
import Lupa from '../../assets/ImgNotas/Lupa.svg'
import SenaiNotes from '../../assets/ImgNotas/Senai Notes.svg'
import Setting from '../../assets/ImgNotas/Setting.svg'
import Vector from '../../assets/ImgNotas/Vector.svg'
import Tag from '../../assets/ImgNotas/Tag.svg'
import CircleClock from '../../assets/ImgNotas/Circle Clock.svg'
import Delete from '../../assets/ImgNotas/Delete.svg'




function TelaNotas() {
    return (
        <>
            <div className="global-tela">
                <div className="notas-root">
                    <main className="tela">
                        {/* MENU LATERAL */}
                        <div className="menu-lateral">
                            <div className="cabecalho-menu">
                                <h1 className="titulo-menu">
                                    <img src={SenaiNotes} />
                                    Senai Notes
                                </h1>
                                <button className="button-lateral">
                                    <img src={Home} />
                                    All Notes
                                </button>
                                <button className="button-lateral">
                                    <img src={Archive} />
                                    Archived Notes
                                </button>
                            </div>
                            <div className="tags">
                                <h1>Tags</h1>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                {/* tentastando over flow  */}
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                                <div className="tag">
                                    <button className="tag-button"> <img src={Tag} />tag</button>
                                </div>
                            </div>
                        </div>

                        {/* ÁREA PRINCIPAL */}
                        <div className="tela-container">
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

                            <div className="fundo-conteudo">
                                <div className="lista-notas">
                                    <button className="Create-New-Note">Nova Nota</button>
                                    <section className="conteiner-notas">
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        {/* testando overflow */}
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                        <div className="nota-item">
                                            <div className="img-nota"></div>
                                            <div className="info-notas">
                                                <h1>test</h1>
                                                <div className="tags-info-notas">
                                                    <p>test</p>
                                                    <p>test</p>
                                                </div>
                                                <p className="data">16/05/2025</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div className="nota-detalhe">
                                    <section className="conteudo">
                                        <div className="img-conteudo"></div>

                                        <div className="titulo-conteudo">
                                            <p className="titulo-nota">React Performance Optimization</p>
                                        </div>

                                        <div className="tags-da-anotacao">
                                            <div className="linha-tags">
                                                <p className="info-nota"><img src={Tag} />Tags:</p>
                                                <p className="info-dado">Dev, React</p>
                                            </div>
                                            <div className="linha-tags">
                                                <p className="info-nota"><img src={CircleClock} />Last edited:</p>
                                                <p className="info-dado">29 Oct 2024</p>
                                            </div>
                                        </div>

                                        <div className="conteudo-anotacao">
                                            <p className="texto-nota">
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                - Use React.lazy() for route-based splitting<br />
                                                - Implement dynamic imports for heavy components<br /><br />
                                                2. Memoization<br />
                                                - useMemo for expensive calculations<br />
                                                - useCallback for function props<br />
                                                - React.memo for component optimization<br /><br />
                                                3. Virtual List Implementation<br />
                                                - Use react-window for long lists<br />
                                                - Implement infinite scrolling<br /><br />
                                                TODO: Benchmark current application and identify bottlenecks<br /><br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                - Use React.lazy() for route-based splitting<br />
                                                - Implement dynamic imports for heavy components<br /><br />
                                                2. Memoization<br />
                                                - useMemo for expensive calculations<br />
                                                - useCallback for function props<br />
                                                - React.memo for component optimization<br /><br />
                                                3. Virtual List Implementation<br />
                                                - Use react-window for long lists<br />
                                                - Implement infinite scrolling<br /><br />
                                                TODO: Benchmark current application and identify bottlenecks<br /><br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                - Use React.lazy() for route-based splitting<br />
                                                - Implement dynamic imports for heavy components<br /><br />
                                                2. Memoization<br />
                                                - useMemo for expensive calculations<br />
                                                - useCallback for function props<br />
                                                - React.memo for component optimization<br /><br />
                                                3. Virtual List Implementation<br />
                                                - Use react-window for long lists<br />
                                                - Implement infinite scrolling<br /><br />
                                                TODO: Benchmark current application and identify bottlenecks<br /><br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                - Use React.lazy() for route-based splitting<br />
                                                - Implement dynamic imports for heavy components<br /><br />
                                                2. Memoization<br />
                                                - useMemo for expensive calculations<br />
                                                - useCallback for function props<br />
                                                - React.memo for component optimization<br /><br />
                                                3. Virtual List Implementation<br />
                                                - Use react-window for long lists<br />
                                                - Implement infinite scrolling<br /><br />
                                                TODO: Benchmark current application and identify bottlenecks<br /><br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                - Use React.lazy() for route-based splitting<br />
                                                - Implement dynamic imports for heavy components<br /><br />
                                                2. Memoization<br />
                                                - useMemo for expensive calculations<br />
                                                - useCallback for function props<br />
                                                - React.memo for component optimization<br /><br />
                                                3. Virtual List Implementation<br />
                                                - Use react-window for long lists<br />
                                                - Implement infinite scrolling<br /><br />
                                                TODO: Benchmark current application and identify bottlenecks<br /><br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                - Use React.lazy() for route-based splitting<br />
                                                - Implement dynamic imports for heavy components<br /><br />
                                                2. Memoization<br />
                                                - useMemo for expensive calculations<br />
                                                - useCallback for function props<br />
                                                - React.memo for component optimization<br /><br />
                                                3. Virtual List Implementation<br />
                                                - Use react-window for long lists<br />
                                                - Implement infinite scrolling<br /><br />
                                                TODO: Benchmark current application and identify bottlenecks<br /><br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                                - Use React.lazy() for route-based splitting<br />
                                                - Implement dynamic imports for heavy components<br /><br />
                                                2. Memoization<br />
                                                - useMemo for expensive calculations<br />
                                                - useCallback for function props<br />
                                                - React.memo for component optimization<br /><br />
                                                3. Virtual List Implementation<br />
                                                - Use react-window for long lists<br />
                                                - Implement infinite scrolling<br /><br />
                                                TODO: Benchmark current application and identify bottlenecks<br /><br />
                                                Key performance optimization techniques:<br /><br />
                                                1. Code Splitting<br />
                                            </p>
                                        </div>
                                    </section>

                                    <div className="botoes-inferior">
                                        <button className="botao1">Save Note</button>
                                        <button className="botao2">Cancel</button>
                                    </div>
                                </div>

                                <div className="acoes-nota">
                                    <div className="caixa-botoes">
                                        <button className="botao"><img src={Archive} />Archive Note</button>
                                        <button className="botao"><img src={Delete} />Delete Note</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default TelaNotas;