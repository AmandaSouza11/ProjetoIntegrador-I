function buscarAluno() {
    const ra = document.querySelector(".raInput").value;

    fetch(`http://localhost:8080/aluno/certificado/${ra}`)
        .then(response => response.json())
        .then(data => {
            exibirInfoAluno(data);
        })
        .catch(error => {
            console.error('Erro ao buscar aluno:', error);
        });
}

function exibirInfoAluno(aluno) {
    const alunoNomeElement = document.querySelector(".aluno-nome");
    alunoNomeElement.textContent = aluno.nome;
}

document.getElementById("formBuscar").addEventListener("submit", function(event) {
    event.preventDefault(); 
    buscarAluno();
});

window.onload = buscarAluno();

function preencherDataAtual() {
    const nomesMeses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const dataAtual = new Date();
    
    const dia = dataAtual.getDate();
    const mes = nomesMeses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    document.getElementById("dia").textContent = dia;
    document.getElementById("mes").textContent = mes;
    document.getElementById("ano").textContent = ano;
}

preencherDataAtual();

const btn = document.querySelector("#imprimir");

btn.addEventListener("click", () => {

    fetch('pdf.html')
    .then(response => response.text())
    .then(html => {
        
        html = html.replace('{{alunoNome}}', document.querySelector(".aluno-nome").textContent);
        html = html.replace('{{dia}}', document.getElementById("dia").textContent);
        html = html.replace('{{mes}}', document.getElementById("mes").textContent);
        html = html.replace('{{ano}}', document.getElementById("ano").textContent);
        
        const option = {
            margin: [10, 10, 10, 10],
            filename: "certificado.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        }
        html2pdf().set(option).from(html).save();
    })
    .catch(error => console.error('Erro ao carregar o arquivo HTML:', error));
});


