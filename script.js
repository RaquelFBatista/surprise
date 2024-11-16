// Função para alternar entre os frames
function nextScreen(currentFrameId, nextFrameId) {
  // Esconde o frame atual
  document.getElementById(currentFrameId).style.display = 'none';

  // Exibe o próximo frame
  document.getElementById(nextFrameId).style.display = 'block';
}

// Função para verificar a identidade
function verifyIdentity() {
  var identity = document.getElementById("identity").value.trim().toLowerCase();
  var errorMessage = document.getElementById("error-message");

  if (identity === "mijas") {
    nextScreen('frame3', 'frame4');
  } else {
    errorMessage.textContent = "Identidade incorreta!";
  }
}

// Função para mover o botão "Não" quando o mouse entra
document.getElementById("noBtn").addEventListener("mouseenter", function() {
  moveButton(this);
});

// Função para mover o botão "Não" para uma nova posição
function moveButton(button) {
  var x = button.offsetLeft;
  var y = button.offsetTop;
  var newX = x + Math.random() * 100 - 50;
  var newY = y + Math.random() * 100 - 50;

  button.style.position = 'absolute';
  button.style.left = newX + 'px';
  button.style.top = newY + 'px';
}

// Função para alternar para a tela final
function showFinalMessage() {
  nextScreen('frame5', 'final');
}

// Inicialização: Exibir a primeira tela
document.getElementById("frame1").style.display = 'block';
