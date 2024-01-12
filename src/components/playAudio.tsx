const clickSound = new Audio("/click.mp3");

export function PlayAudio() {
  clickSound.currentTime = 0;
  clickSound.play();
}
