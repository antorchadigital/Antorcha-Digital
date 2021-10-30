/*     
Grupo: Antorcha
Autor: Harold Caraballo
Author URI: https://publinet.net.ve
Version: 1.0.0
Description: Bootstrap 5.1.3, Sass, JavaScript
Text Domain: base
Tags: 
Theme URI: https://publinet.net.ve/portafolio/antorcha
*/

document.addEventListener("DOMContentLoaded", function(event) {
/*Selector modo dark(oscuro) o modo light(claro)*/
    var e = document.getElementById('switch-mode-dark');
    e.checked=false;
    document.getElementById('switch-mode-dark').addEventListener('click', function () {
        var e = document.getElementById('switch-mode-dark');
        var d = document.querySelector("body");
        e.checked? (d.classList.add("mode-dark"), d.classList.remove("mode-light") ) : (d.classList.remove("mode-dark"), d.classList.add("mode-light") );
    });

    if(window.innerWidth<=991){ 
        var f = document.querySelector(".navbar");
            f.classList.add("navbar-light");      
    }
    window.addEventListener('scroll',(event) => {   
        if(window.innerWidth>=992){  
            var f = document.querySelector(".navbar");
            f.classList.add("navbar-expand-lg", "navbar-dark");           
        }else{
            var f = document.querySelector(".navbar");
            f.classList.add("navbar-light");     
        }
        if(window.scrollY>=25){
            var h = document.querySelector(".navbar");
            h.classList.add("bg-light","scroll");
        }else{
            var i = document.querySelector(".navbar");
            i.classList.remove("bg-light","scroll");        
        };       
    });

});

$( document ).ready( function() {
      $(".nav-link").on('click', function() {   
        setTimeout(function(){ 
          $("#offcanvasNavbar").removeClass("show");   
          $(".offcanvas-backdrop").removeClass("show");    
          $(".offcanvas-backdrop").addClass("invisible");         
                return false;
        }, 200)  
      });
    $('.carousel-nuestrosServicios').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,                    
                    autoplay: true,    
                    dots:true,                    
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,                    
                    autoplay: true,    
                    dots:true,
                    arrows: false,
                }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                infinite: true,
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                centerMode: true,
                arrows: false,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                centerMode: true,
                arrows: false,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                centerMode: false,
                arrows: false,
                infinite: true,
              }
            }
          ]
    });
    $('.carousel-comoTrabajamos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,                    
                    autoplay: true,    
                    dots:false,                    
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,                    
                    autoplay: true,    
                    dots:false,
                    arrows: false,
                }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                infinite: true,
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                centerMode: true,
                arrows: false,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                centerMode: true,
                arrows: false,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2000,                    
                autoplay: true,    
                dots:true,
                centerMode: false,
                arrows: false,
                infinite: true,
              }
            }
          ]
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dot:true,
        arrows: false,      

    });  
    $('.button-next').click(function(){
      $(".slider-for").slick('slickNext');
    });
    $('.button-prev').click(function(){
      $(".slider-for").slick('slickPrev');
    });

});    