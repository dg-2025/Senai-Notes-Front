import Archive from '../../assets/ImgNotas/Archive.svg';
import Home from '../../assets/ImgNotas/Home.svg';
import SenaiNotes from '../../assets/ImgNotas/Senai Notes.svg';
import Tag from '../../assets/ImgNotas/Tag.svg';


function MenuLateral() {
    return (
        <>
            {/* MENU LATERAL */}
            <nav className="menu-lateral">
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
                </div>
            </nav>
        </>
    )
}
export default MenuLateral;