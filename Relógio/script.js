function carregar(){
    // Seleciona os elementos do HTML onde as informações serão exibidas
    const msg = window.document.querySelector('div#horario')
    const info = window.document.querySelector('div#info')
    const img = window.document.querySelector('img#imgma')
    const msgBoa = window.document.querySelector('div#msg')
    
    // Obtém a data e hora atual do sistema
    const data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundos = data.getSeconds()
    const dia = data.getDate()
    const indiceMes = data.getMonth()

    // Formata as horas, minutos e segundos para sempre exibirem duas casas decimais
    hora = String(hora).padStart(2, '0');
    minuto = String(minuto).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');

    // Arrays para obter o nome do dia da semana e do mês
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const diaSem = data.getDay()
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const ano = data.getFullYear()

    // Atualiza as informações na tela
    info.innerHTML = `${diaSemana[diaSem]}, ${dia} de ${mes[indiceMes]} de ${ano}`
    msg.innerHTML = `${hora}: ${minuto}: ${segundos}`

    // Define a imagem, cor de fundo e mensagem conforme o horário do dia
    if(hora >= 1 && hora < 6){
        //Madrugada
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#282F39'
        msgBoa.innerHTML = '<strong>Boa Madrugada!</strong>'
        msgBoa.style.color = '#282F39'
    }else if( hora >= 6 && hora < 12) {
        //Manhã
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#BDCAD5'
        msgBoa.innerHTML = '<strong>Bom Dia!</strong>'
        msgBoa.style.color = '#BDCAD5'
    }else if(hora >= 12 && hora < 16){
        //Meio-dia
        img.src = 'imagens/meio-dia.png'
        document.body.style.background = '#678AA5'
        msgBoa.innerHTML = '<strong>Boa Tarde!</strong>'
        msgBoa.style.color = '#678AA5'
    }else if(hora >= 16 && hora <= 18) {
        //Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#D19344'
        msgBoa.innerHTML = '<strong>Boa Tarde!</strong>'
        msgBoa.style.color = '#D19344'
    }else{
        //Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#403F8A'
        msgBoa.innerHTML = '<strong>Boa Noite!</strong>'
        msgBoa.style.color = '#403F8A'
    }
}

// Atualiza o relógio a cada segundo para manter a exibição em tempo real
setInterval(carregar, 1000);