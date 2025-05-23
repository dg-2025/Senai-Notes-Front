import './style.css';
import '../../assets/styles/global.css';
import Archive from '../../assets/ImgNotas/Archive.svg'
import Delete from '../../assets/ImgNotas/Delete.svg'





function AcoesNota({ notaSelecionada, aoFecharANota }) {
    const baseUrl = "http://localhost:3000/notas";

    const onArchiveNote = async () => {

        const response = await fetch(`${baseUrl}/${notaSelecionada.id}`, {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({ archived: true }),
        });

        if (!response.ok) {

            alert("Erro ao arquivar a nota");

        } else {

            alert(`Nota "${notaSelecionada.title}" arquivada!`)
        }

        aoFecharANota();

    }

    const onUnarchiveNote = async () => {

        const response = await fetch(`${baseUrl}/${notaSelecionada.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ archived: false }),
        });

        if (!response.ok) {

            alert (`Nota "${notaSelecionada.title}" desarquivada!`);

        }

        aoFecharANota();

    };

    const onDeleteNote = async () => {

        const response = await fetch(`${baseUrl}/${notaSelecionada.id}`,{
            method: "DELETE",
        });

        if (!response.ok) {

            alert("Erro ao deletar a nota");
        
        } else {

            alert(`Nota "${notaSelecionada.title}" deletada!`)

        }

        aoFecharANota();
    };

    return (
        <>
            <div className="acoes-nota">
                <div className="caixa-botoes">
                    {notaSelecionada.archived && (
                    <button onClick={onUnarchiveNote}
                    className="botao"><img src={Archive} />Unarchive Note</button>
                    )}

                    {!notaSelecionada.archived && (
                    <button onClick={onArchiveNote}
                    className="botao"><img src={Archive} />Archive Note</button>
                    )}

                        
                    <button onClick={onDeleteNote}
                     className="botao"><img src={Delete} />Delete Note</button>
                </div>
            </div>

        </>
    )
}
export default AcoesNota;