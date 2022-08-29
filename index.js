let img1 = document.querySelector('.back_img')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let img5 = document.querySelector('.img5'  )    
console.log(img1);
console.log(img2);
console.log(img3);
console.log(img4);
console.log(img5);




let color1 = document.querySelector('.box_1')
let color2 = document.querySelector('.box_2')
let color3 = document.querySelector('.box_3')
let color4 = document.querySelector('.box_4')
let color5 = document.querySelector('.box_5')



color1.onclick = () => {
   img1.classList.add('img1')
   img1.classList.remove('img2')
   img1.classList.remove('img3')
   img1.classList.remove('img4')
   img1.classList.remove('img5')
}

color2.onclick = () => {
    img2.classList.add('img2')
    img2.classList.remove('img1')
    img2.classList.remove('img3')
    img2.classList.remove('img4')
    img2.classList.remove('img5')
}

color3.onclick = () => {
img3.classList.add('img3')
img3.classList.remove('img1')
img3.classList.remove('img2')
img3.classList.remove('img4')
img3.classList.remove('img5')
}

color4.onclick = () => {
img4.classList.add('big-img-4')
img4.classList.remove('big-img-1')
img4.classList.remove('big-img-2')
img4.classList.remove('big-img-3')
img4.classList.remove('big-img-5')
}

color5.onclick = () => {
img5.classList.add('img5')
img5.classList.remove('img1')
img5.classList.remove('img2')
img5.classList.remove('img3')
img5.classList.remove('img4')
}




























// // const colors = document.querySelector('[data-colors]')   
// const btn = document.querySelectorAll('button[ data-apple ]')










