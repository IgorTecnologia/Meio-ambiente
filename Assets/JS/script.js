let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false

nome.style.width = '20%'
email.style.width = '20%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome = document.querySelector('#txtNome')
        .innerHTML = 'Nome Inválido'
         txtNome = document.querySelector('#txtNome')
        .style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#email')

    if( email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail = document.querySelector('#txtEmail')
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    }else{
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
}
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 20){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
    function validaMensagem(){
        let txtMensagem = document.querySelector('#txtMensagem')

        if(mensagem.value.length > 100){
            txtMensagem.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
            txtMensagem.style.color = 'red'
            txtMensagem.style.display = 'block'
        }else{
            txtMensagem.style.display = 'none'
            mensagemOk = true
        }
    }

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}


