const form = document.getElementById('form-exercicio');

function compararNumeros(){
    var numA = parseInt(document.getElementById("numA").value);
    var numB = parseInt(document.getElementById("numB").value);

    if (!isNaN(numA) && !isNaN(numB)) {
        if (numA === numB) {
            const mensagemIgual = `O número <b>${numB}</b> é igual a <b>${numA}</b> - Tente novamente.`;
            const containerMensagemIgual = document.querySelector('.error-igual');
            containerMensagemIgual.innerHTML = mensagemIgual;
            containerMensagemIgual.style.display = 'block';
            document.querySelector('.error-maior').style.display = 'none'
            document.querySelector('.success-message').style.display = 'none'
            
        
        } else if (numA > numB) {
            const mensagemFalha = `O número <b>${numB}</b> é menor que <b>${numA}</b> - Tente novamente.`;
            const containerMensagemFalha = document.querySelector('.error-maior');
            containerMensagemFalha.innerHTML = mensagemFalha;
            containerMensagemFalha.style.display = 'block';
            document.querySelector('.error-igual').style.display = 'none'
            document.querySelector('.success-message').style.display = 'none'
            
            
        } else { 
            const mensagemSucesso = `O número <b>${numB}</b> é maior que <b>${numA}</b> - Está correto.`;
            const containerMessagemSucesso = document.querySelector('.success-message');
            containerMessagemSucesso.innerHTML = mensagemSucesso;
            containerMessagemSucesso.style.display = 'block';
            document.querySelector('.error-maior').style.display = 'none'
            document.querySelector('.error-igual').style.display = 'none'
            
        } 
    }
}

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    compararNumeros();
});