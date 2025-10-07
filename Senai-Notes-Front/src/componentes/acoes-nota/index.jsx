import './style.css';
import '../../assets/styles/global.css';
import Archive from '../../assets/ImgNotas/Archive.svg';
import Delete from '../../assets/ImgNotas/Delete.svg';

function AcoesNota({ notaSelecionada, aoFecharANota }) {
    const baseUrl = "http://localhost:8080/api/notas";
    const token = localStorage.getItem("meuToken");

    const onArchiveNote = async () => {
        const response = await fetch(`${baseUrl}/${notaSelecionada?.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                idUsuario: notaSelecionada?.idUsuario?.id || notaSelecionada?.idUsuario,
                titulo: notaSelecionada?.titulo,
                descricao: notaSelecionada?.descricao,
                imagem: notaSelecionada?.imagem,
                tags: notaSelecionada?.tags || [],
                arquivado: true
            }),
        });

        if (!response.ok) {
            alert("Erro ao arquivar a nota");
        } else {
            alert(`Nota "${notaSelecionada?.titulo}" arquivada!`);
        }

        aoFecharANota();
    };

    const onUnarchiveNote = async () => {
        const response = await fetch(`${baseUrl}/${notaSelecionada?.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                idUsuario: notaSelecionada?.idUsuario?.id || notaSelecionada?.idUsuario,
                titulo: notaSelecionada?.titulo,
                descricao: notaSelecionada?.descricao,
                imagem: notaSelecionada?.imagem,
                tags: notaSelecionada?.tags || [],
                arquivado: false
            }),
        });

        if (!response.ok) {
            alert("Erro ao desarquivar a nota");
        } else {
            alert(`Nota "${notaSelecionada?.titulo}" desarquivada!`);
        }

        aoFecharANota();
    };

    const onDeleteNote = async () => {
        const id = notaSelecionada?.id || notaSelecionada?.idNota; // <-- ajuste aqui
        if (!id) {
            alert("Erro: ID da nota não encontrado!");
            return;
        }

        const response = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            alert("Erro ao deletar a nota");
        } else {
            alert(`Nota "${notaSelecionada?.titulo}" deletada!`);
        }

        aoFecharANota();
    };

    return (
        <div className="acoes-nota">
            <div className="caixa-botoes">
                {notaSelecionada?.arquivado && (
                    <button onClick={onUnarchiveNote} className="botao" type="button">
                        <img src={Archive} alt="Unarchive" /> Desarquivar
                    </button>
                )}

                {!notaSelecionada?.arquivado && (
                    <button onClick={onArchiveNote} className="botao" type="button">
                        <img src={Archive} alt="Archive" /> Arquivar
                    </button>
                )}

                <button onClick={onDeleteNote} className="botao" type="button">
                    <img src={Delete} alt="Delete" /> Excluir
                </button>
            </div>
        </div>
    );
}

export default AcoesNota;
