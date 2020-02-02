function startGame() {
  document.getElementById('gameMenu').style.display = 'none';
  document.getElementById('gameContainer').classList.remove(['shaking']);
  continueStory(true);
}