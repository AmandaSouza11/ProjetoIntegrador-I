function getAlunos() {
    fetch("http://localhost:8080/aluno")
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
        console.error('Erro ao obter alunos:', error);
    });
}

window.onload = getAlunos;

