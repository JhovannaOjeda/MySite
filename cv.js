document.addEventListener('scroll', function() {
   if(document.documentElement.scrollTop > $(".contain")[0].offsetTop - 500){
      $(".contain")[0].animate({opacity:1})
      document.querySelectorAll(".contain")[0].classList.add("animate__backInUp")
   }

   if(document.documentElement.scrollTop > $(".contain")[1].offsetTop - 500){
     $(".contain")[1].animate({opacity:1})
     document.querySelectorAll(".contain")[1].classList.add("animate__fadeInRight")
   }

     for(var i = 0; i < $("div.skillImage").length; i++){
       if(document.documentElement.scrollTop > $("div.skillImage")[i].offsetTop - 600){
       $("div.skillImage")[i].animate({opacity:1})
       document.querySelectorAll("div.skillImage")[i].classList.add("animate__animated", "animate__zoomIn")
     }
     }
})
