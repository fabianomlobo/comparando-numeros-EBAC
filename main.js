const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const mensagemFeedback = document.getElementById('mensagem-feedback')
    let campoA = document.getElementById('campo-a').value
    let campoB = document.getElementById('campo-b').value
    
    let numeroA = Number(campoA);
    let numeroB = Number(campoB);    
    
    if (numeroA < numeroB){  
        mensagemFeedback.style.display = 'block'
        mensagemFeedback.innerHTML = `Tudo certo!`
        clear()
        
    } else {
        mensagemFeedback.style.display = 'block'
        mensagemFeedback.innerHTML = `Formulário incorreto`
        clear()
    }
})

function clear() {
    document.getElementById('campo-a').value = ''
    document.getElementById('campo-b').value = ''
}
