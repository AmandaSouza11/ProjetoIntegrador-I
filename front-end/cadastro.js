const formulario = document.querySelector("form");
const iRa = document.querySelector(".ra");
const iRg = document.querySelector(".rg");
const iNome = document.querySelector(".nome");
const iSexo = document.querySelector(".sexo");
const iResponsavel_1 = document.querySelector(".responsavel_1");
const iTelefone_1 = document.querySelector(".telefone_1");
const iResponsavel_2 = document.querySelector(".responsavel_2");
const iTelefone_2 = document.querySelector(".telefone_2");
const iRua = document.querySelector(".rua");
const iNumero_residencial = document.querySelector(".numero_residencial");
const iComplemento = document.querySelector(".complemento");
const iBairro = document.querySelector(".bairro");
const iStatus = document.querySelector(".status");
const iSerie = document.querySelector(".serie");
const iTurma = document.querySelector(".turma");
const iData_de_formacao = document.querySelector(".data_de_formacao");

function cadastrar(){

    fetch("http://localhost:8080/aluno",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                ra: iRa.value,
                rg: iRg.value,
                nome: iNome.value,
                sexo: iSexo.value,
                responsavel_1: iResponsavel_1.value,
                telefone_1: iTelefone_1.value,
                responsavel_2: iResponsavel_2.value,
                telefone_2: iTelefone_2.value,
                rua: iRua.value,
                numero_residencial: iNumero_residencial.value,
                complemento: iComplemento.value,
                bairro: iBairro.value,
                status: iStatus.value,
                serie: iSerie.value,
                turma: iTurma.value,
                data_de_formacao: iData_de_formacao.value
            })
            
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

};

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    cadastrar();
    limpar();
});

function limpar(){
    iRa.value = "";
    iRg.value = "";
    iNome.value = "";
    iSexo.value = "";
    iResponsavel_1.value = "";
    iTelefone_1.value = "";
    iResponsavel_2.value = "";
    iTelefone_2.value = "";
    iRua.value = "";
    iNumero_residencial.value = "";
    iComplemento.value = "";
    iBairro.value = "";
    iStatus.value = "";
    iSerie.value = "";
    iTurma.value = "";
    iData_de_formacao.valu = "";
}

