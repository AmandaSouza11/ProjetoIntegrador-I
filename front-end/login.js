const emailInput = document.querySelector(".email");
const senhaInput = document.querySelector(".senha");

function logar(){
    const email = emailInput.value;
    const senha = senhaInput.value;

    fetch("http://localhost:8080/login", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })
    .then(response => response.json()) // Transforma a resposta em JSON
    .then(data => {
        if (data === true) {
            // Se o login for bem-sucedido, redireciona para a próxima tela
            window.location.href = "tela_inicial.html";
        } else {
            // Se o login falhar, exibe uma mensagem de erro
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error('Erro ao realizar login:', error);
    });
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    logar();
});