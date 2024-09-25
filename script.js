const imgEl = document.querySelector(".images")
const btnEl = document.querySelector(".btn")
btnEl.addEventListener("click",()=>{
  imgNum = 5;
  addNewImages()
});

function addNewImages(){
  for (let index = 0; index < imgNum; index++) {
    const newImgEl = document.createElement("img")
    newImgEl.src = `https://picsum.photos/300?random=1${Math.floor(
      Math.random() * 2000
    )}`;
    imgEl.appendChild(newImgEl)
  }

};