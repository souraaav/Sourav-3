// Heart particles
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
let hearts = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    size: Math.random() * 5 + 5,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5
  };
}

for (let i = 0; i < 100; i++) {
  hearts.push(createHeart());
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 15, size / 15);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -15, -15);
  ctx.bezierCurveTo(-35, -15, -35, 10, -35, 10);
  ctx.bezierCurveTo(-35, 25, -15, 40, 0, 50);
  ctx.bezierCurveTo(15, 40, 35, 25, 35, 10);
  ctx.bezierCurveTo(35, 10, 35, -15, 15, -15);
  ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 105, 135, ${opacity})`;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y -= heart.speed;
    if (heart.y < -50) {
      hearts[index] = createHeart();
      hearts[index].y = canvas.height + 50;
    }
    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
  });
  requestAnimationFrame(animate);
}

animate();

// Reveal letter
document.getElementById('revealBtn').addEventListener('click', () => {
  document.querySelector('.letter').classList.remove('hidden');
  document.getElementById('revealBtn').style.display = 'none';
});