const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage"); // image에 bgImage 클래스 추가
body.appendChild(bgImage); // body의 자식에 image추가
