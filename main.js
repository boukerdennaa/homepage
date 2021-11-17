WebFont.load({
    google: {
        families: ['Ubuntu:700,700i', 'Ubuntu+Condensed:400']
    }
});  

var slideIndex= 0;
function showSlides(){
    var slides = document.getElementsByClassName("mySlides");
    console.log("funciona");
    for( i=0; i < slides.length; i++){
        slides[i].style.display="none";
    }

    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display= "block";
    setTimeout(showSlides, 2000);
}    