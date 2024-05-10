function buscarAluno() {
    const ra = document.querySelector(".raInput").value;
    fetch(`http://localhost:8080/aluno/${ra}`)
        .then(response => response.json())
        .then(data => {
            exibirInfoAluno(data);
        })
        .catch(error => {
            console.error('Erro ao buscar aluno:', error);
        });
}

function exibirInfoAluno(aluno) {
    const alunoInfoDiv = document.getElementById("alunoInfo");
    alunoInfoDiv.innerHTML = `
        <h2>Informações do Aluno</h2>
        <p>RA: ${aluno.ra}</p>
        <p>RG: ${aluno.rg}</p>
        <p>Nome: ${aluno.nome}</p>
        <p>Sexo: ${aluno.sexo}</p>
        <p>Responsável 1: ${aluno.responsavel_1}</p>
        <p>Telefone 1: ${aluno.telefone_1}</p>
        <p>Responsável 2: ${aluno.responsavel_2}</p>
        <p>Telefone 2: ${aluno.telefone_2}</p>
        <p>Rua: ${aluno.rua}</p>
        <p>Número Residencial: ${aluno.numero_residencial}</p>
        <p>Complemento: ${aluno.complemento}</p>
        <p>Bairro: ${aluno.bairro}</p>
        <p>Status: ${aluno.status}</p>
        <p>Série: ${aluno.serie}</p>
        <p>Turma: ${aluno.turma}</p>
        <p>Data de Formação: ${aluno.data_de_formacao}</p>
    `;
}

document.getElementById("formBuscar").addEventListener("submit", function(event) {
    event.preventDefault(); 
    buscarAluno();
});


window.onload = buscarAluno;