   // limit the amount onscroll function is called 

   function debounce(func, wait = 20, immediate = true) {
       var timeout;
       return function () {
           var context = this,
               args = arguments;
           var later = function () {
               timeout = null;
               if (!immediate) func.apply(context, args);
           };
           var callNow = immediate && !timeout;
           clearTimeout(timeout);
           timeout = setTimeout(later, wait);
           if (callNow) func.apply(context, args);
       };
   }


   const sliderimages = document.querySelectorAll(".slide-in");

   function checkSlide(event) {
       sliderimages.forEach(sliderImage => {
           // halfway through each image
           const slideInAt = (window.scrollY + window.innerHeight) -
               sliderImage.height / 2;
           // bottom of each image

           const imageBottom = sliderImage.offsetTop + sliderImage.height;
           const isHalfShown = slideInAt > sliderImage.offsetTop;
           const isNotScrolledPast = window.scrollY < imageBottom;

           if (isHalfShown && isNotScrolledPast) {
               sliderImage.classList.add("active");
           } else {
               sliderImage.classList.remove("active");
           }
       });
   }

   window.addEventListener("scroll", debounce(checkSlide));