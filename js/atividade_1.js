// seleleção o boão usado a identidade seleceta dele e ususario progrmar
/* esse são elemetos com id rapaz fazer o codigo fazer ação */ 
const batao = document.getElementById('botao');
const campo_nome = document.getElementById('nome_heroi');

 batao.addEventListener("click",function(){
    const nome = campo_nome.value;

    if(nome === ""){
        alert("Por favor, herói, identifique-se antes de entrar na torre!")
    } else{
        alert("Saudações, " + nome + "! Seu recrutamento foi enviado para a Torre dos Titãs!")
    }
 });

