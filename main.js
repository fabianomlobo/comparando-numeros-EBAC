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
        mensagemFeedback.innerHTML = `O número ${numeroA} é menor que o número ${numeroB}`
        clear()
        
    } else if (numeroA == numeroB){
        mensagemFeedback.style.display = 'block'
        mensagemFeedback.innerHTML = `O número ${numeroA} é igual ao número ${numeroB}`
        clear()
        
    } else {
        mensagemFeedback.style.display = 'block'
        mensagemFeedback.innerHTML = `O número ${numeroA} é maior que o número ${numeroB}`
        clear()
    }
})

function clear() {
    document.getElementById('campo-a').value = ''
    document.getElementById('campo-b').value = ''
}
