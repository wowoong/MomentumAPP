const BG_CLASS_NAME = 'bg_img';

const images = ["111.jpg", "222.jpg", "333.jpg", "444.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img')
bgImage.src = `img/${randomImg}`;
bgImage.classList.add(BG_CLASS_NAME);

document.body.appendChild(bgImage);