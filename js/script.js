$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY > 20 ){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // Slide up script
    $('.scroll-up-btn').click(()=>{
        $('html').animate({scrollTop:0});
    })
    // typing animation script 
    var type = new Typed(".typing",{
        strings: ["Developer","Portfolio", "Designer", "Responsive","Hire me "],
        typeSpeed: 100,
        backSpeed : 60,
        loop :true,
    }); 

    // toggle menu/navbar script
    $(".menu-btn").click(()=>{
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("x-btn");
    })
});