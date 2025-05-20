import './style.css';
import '../../assets/styles/global.css';



function ListaNotas() {
    return (
        <>
            <nav className="lista-notas">
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
                </section>
            </nav>
        </>
    )
}
export default ListaNotas;