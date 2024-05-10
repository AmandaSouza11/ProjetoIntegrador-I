function buscarTurma() {
    
    const serie = document.querySelector(".serieInput").value;
    const turma = document.querySelector(".turmaInput").value;

    const formAction = `/aluno/${serie}/${turma}`;
    document.getElementById('formBuscar').setAttribute('action', formAction);

    fetch(`http://localhost:8080/aluno/${serie}/${turma}`)
        .then(response => response.json())
        .then(data => {

            document.getElementById('alunos').innerHTML = '';

            data.forEach(aluno => {
                 const alunoElement = document.createElement('div');
                 alunoElement.classList.add('aluno');
                 alunoElement.innerHTML = `
                 <p class="ra">${aluno.ra}</p>
                 <p class="nome">${aluno.nome}</p>
                 <p class="serie">${aluno.serie}</p>
                 <p class="turma">${aluno.turma}</p>
                 <p class="status">${aluno.status}</p>
                `;
                document.getElementById('alunos').appendChild(alunoElement);
            }); 
        })
        .catch(error => {
            console.error('Erro ao buscar aluno:', error);
        });
}

document.getElementById("formBuscar").addEventListener("submit", function(event) {
    event.preventDefault(); 
    buscarTurma();
});

window.onload = buscarTurma;