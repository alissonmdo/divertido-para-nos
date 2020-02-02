function startGame() {
  document.getElementById('gameMenu').style.display = 'none';
  document.getElementById('gameContainer').classList.remove(['shaking']);
  document.getElementById('timelineContainer').classList.remove(['hidden']);
  document.getElementById('choicesContainer').classList.remove(['hidden']);
  continueStory(true);
}