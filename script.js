
function filtrarConteudo() {
    const input = document.getElementById('barra-de-pesquisa');
    const filtro = input.value.toLowerCase();
    const secoes = document.querySelectorAll('.materia-jornal section');

    secoes.forEach(secao => {
        const texto = secao.textContent || secao.innerText;
        if (texto.toLowerCase().includes(filtro)) {
            secao.style.display = "";
        } else {
            secao.style.display = "none";
        }
    });
}

const palavrasChave = [
    "Pelé",
    "Sportswashing",
    "Copa do Mundo",
    "Brasil",
    "Ditadura Militar",
    "Catar",
    "Arábia Saudita",
    "Propaganda",
    "Censura",
    "Repressão",
    "argentina",
    "URSS",
    "champions league"
    
];

function filtrarEBuscarSugestoes() {
    const input = document.getElementById('barra-de-pesquisa');
    const filtro = input.value.toLowerCase();
    const listaSugestoes = document.getElementById('sugestoes');
    const secoes = document.querySelectorAll('.materia-jornal section');

    secoes.forEach(secao => {
        const texto = secao.textContent || secao.innerText;
        if (texto.toLowerCase().includes(filtro)) {
            secao.style.display = "";
        } else {
            secao.style.display = "none";
        }
    });

    listaSugestoes.innerHTML = "";

    if (filtro.trim() === "") {
        listaSugestoes.style.display = "none";
        return;
    }

    const correspondencias = palavrasChave.filter(palavra => 
        palavra.toLowerCase().includes(filtro)
    );

    if (correspondencias.length > 0) {
        correspondencias.forEach(palavra => {
            const li = document.createElement('li');
            li.textContent = palavra;
            li.onclick = function() {
                input.value = palavra;
                filtrarEBuscarSugestoes();
                listaSugestoes.style.display = "none";
            };
            listaSugestoes.appendChild(li);
        });
        listaSugestoes.style.display = "block";
    } else {
        listaSugestoes.style.display = "none";
    }
}

document.addEventListener('click', function(e) {
    const container = document.querySelector('.barra-de-pesquisa');
    const listaSugestoes = document.getElementById('sugestoes');
    if (container && !container.contains(e.target)) {
        listaSugestoes.style.display = "none";
    }
});