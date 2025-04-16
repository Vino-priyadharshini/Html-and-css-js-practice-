/*alert("hello");
const container = document.querySelector(`.container`);

const slider = document.querySelectorAll(`.slide`);
let imgList = [ "url(god.jpg)", "url(2.jpg)", "url(3.jpg)","url(4.jpg)","url(5.jpg)","url(6.jpg)","url(7.jpg)","url(8.jpg)",'url(9.jpg)' ];


let index=0;

slider.forEach((button) => {
    button.addEventListener('click',() =>{
         if (button.classList.contains(`left`))
         {
             index --;
             if (index < 0)
             {
                  index = imgList. Length -1
             }
              container.Style.background =
              '${imgList[index]}';
         } 
          else 
          {
              index ++ ;
              if (index == imgList.length)
              {
                  index = 0;
               }
        
              container.Style.background='${imgList[index]}';
          };
       } );
 });*/
 let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}