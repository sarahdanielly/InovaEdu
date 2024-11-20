let currentImageIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.banner img'); // Seleciona todas as imagens

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active'); // Remove a classe active de todas as imagens
        if (i === index) {
            img.classList.add('active'); // Adiciona a classe active à imagem atual
        }
    });
}

function changeImage(direction) {
    currentImageIndex += direction; // Atualiza o índice da imagem atual
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Vai para a última imagem se for menor que 0
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Volta para a primeira imagem se for maior que o comprimento do array
    }
    showImage(currentImageIndex); // Mostra a imagem atual
}

// Inicializa o carrossel mostrando a primeira imagem
showImage(currentImageIndex);

// Opção de mudar a imagem automaticamente a cada 5 segundos
setInterval(() => {
    changeImage(1); // Muda para a próxima imagem
}, 5000);


/* Formulário */

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    alert("ENVIADO COM SUCESSO!")
})