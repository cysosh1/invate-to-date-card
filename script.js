// показать адрес и время
document.getElementById('showInfo').addEventListener('click', () => {
  const info = document.getElementById('infoBlock');
  info.style.display = 'block';
});

// создание сердечек
const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = 'ты котик ❤️';

  // ограничиваем появление в пределах экрана
  heart.style.left = Math.random() * 90 + 'vw';
  heart.style.top = Math.random() * 90 + 'vh';
  
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
};

setInterval(createHeart, 700);
