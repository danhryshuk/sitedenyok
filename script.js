// script.js — Frutiger Aero flavor

// Typewriter effect for intro text
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = ''; // очищення перед початком
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Bubble animation effect (bubbles floating in background)
function createBubbles(count = 30) {
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
    document.body.appendChild(bubble);
  }
}

// Animate icons on hover (по всім .emoji)
function animateIcons() {
  const icons = document.querySelectorAll('.emoji');
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.3) rotate(5deg)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });
}

// Запуск після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.marquee');
  if (intro) typeWriter(intro, intro.textContent.trim());

  createBubbles();
  animateIcons();

  const playPauseBtn = document.getElementById('playPause');
  if (playPauseBtn) {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#00ffff',
      progressColor: '#00cccc',
      height: 100,
      barWidth: 2,
      responsive: true,
      backend: 'MediaElement',
    });

    wavesurfer.load('audio/denyok-theme.mp3');

    playPauseBtn.addEventListener('click', () => {
      wavesurfer.playPause();
      playPauseBtn.textContent = wavesurfer.isPlaying() ? '⏸️' : '▶️';
    });
  }
});
