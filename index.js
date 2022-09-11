let imageArray = [
  "images/Ari.png",
  "images/Des.png",
  "images/Lin.png",
  "images/Ethan.png",
  "images/Cjmk.png",
  "images/Dream.png",
  "images/Catnips.png",
  "images/Kirby.png",
  "images/Charmed.png",
  "images/Jules.png",
  "images/Riza.png",
  "images/Jerry.png",
  "images/Soze.png",
  "images/Chino.png",
  "images/Tokio.jpeg",
];

var femaleBox = document.getElementById("female-box");
var maleBox = document.getElementById("male-box");
var button = document.getElementById("date-btn");

maleBox.src = "images/question-mark.png";
maleBox.style.width = "400px";
maleBox.style.height = "400px";
femaleBox.src = "images/question-mark.png";
femaleBox.style.width = "400px";
femaleBox.style.height = "400px";
let currentImage = "";

function changeImage() {
  //   document.getElementById("instructions").style.display = "none";
  let index = Math.floor(Math.random() * imageArray.length);
  let srcImage = imageArray[index];
  while (srcImage == currentImage) {
    index = Math.floor(Math.random() * imageArray.length);
    srcImage = imageArray[index];
  }
  //   document.getElementById("myImageId").src = srcImage;
  currentImage = srcImage;
  return srcImage;
}

button.addEventListener("click", () => {
  // document.getElementById("loader").style.display = "block";
  maleBox.src = changeImage();
  femaleBox.src = changeImage();
});
