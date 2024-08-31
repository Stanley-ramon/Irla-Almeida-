document.addEventListener("DOMContentLoaded", function() {
    // Efeito de digitação
    const textElement = document.getElementById("typing-text");
    const text = textElement.innerHTML;
    textElement.innerHTML = ''; // Limpa o texto inicial
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 70); // Velocidade da digitação (em milissegundos)
        }
    }

    typeText(); // Inicia o efeito de digitação

    // Controle de música
    const audioElement = document.getElementById("background-music");
    const playButton = document.getElementById("play-button");

    // Inicia a música automaticamente (se o navegador permitir)
    audioElement.play().catch(error => {
        console.log("A reprodução automática foi bloqueada pelo navegador:", error);
    });

    // Adiciona o evento de clique ao botão de Play/Pause
    playButton.addEventListener("click", function() {
        // Verifica se a música está pausada
        if (audioElement.paused) {
            audioElement.play();
            playButton.textContent = "Pausar"; // Troca o texto do botão para "Pausar Música"
        } else {
            audioElement.pause();
            playButton.textContent = "Play"; // Troca o texto do botão para "Play Música"
        }
    });
});
