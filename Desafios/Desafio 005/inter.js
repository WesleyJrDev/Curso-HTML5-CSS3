let int = document.querySelector('div#Iniciante')

function mais() {

    int.innerHTML = '<code> Com pouco tempo nos estudos da programação me identifiquei profundamente, sendo extremamente motivado a avansar mesmo de maneira auto-didata(com o valioso auxilio do canal do YouTube Curso em Vídeo e Léo Andrade). Apesar do progresso significativo no conhecimento, tenho uma noção do quanto ainda falta para me considerar se quer Junior. Somado ao meu compromisso de me emprenhar profundamente, e do meu senso ético e profissional desenvolvido ao longo da vida, sinto ter alcançado dominio sufiente para ingressar no primeiro projeto. <br><br> <input type="button" value="Menos" id="menos" onclick="menos()"></code>'

}

function menos() {
    int.innerHTML = '<input type="button" value="Mais..." id="mais" onclick="mais()">'
}
