
$(".navbar a, #bton1").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 1200);
    }
});

window.addEventListener("scroll", function(){
    if(window.scrollY > 150){
        document.querySelector(".navbar").style.opacity= 0.8;
    }else{
        document.querySelector(".navbar").style.opacity= 1;
    }
});



$("#bton1").animate({
    left: '0'
}, 900)
    
      





$(window).on("scroll",function(){
    if(window.scrollY  > 910){
        $("#boxx1").animate({
            right:'0'
        },900)
        // document.querySelector("#boxx").style.right = 0; 
    }
})

    

$(window).on("scroll",function(){
if(window.scrollY  > 910){
    $("#boxx2").animate({
        top:'0'
    },900)
        // document.querySelector("#boxx").style.right = 0; 
    }
})

    

$(window).on("scroll",function(){
if(window.scrollY  > 910){
    $("#boxx3").animate({
        left:'0'
    },900)
           // document.querySelector("#boxx").style.right = 0; 
        }
})


/*const showMenu = (toggleId , navId) =>
{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click' , ()=>
        {
            nav.classList.toggle('show')
        })
    }
};

showMenu('nav-toggle' , 'nav-menu'); */










$("#bton2").animate({
    left: '0'
}, 500)






$(".tra1").mouseenter(function(){
    $(".tra1 ul li a").css("color","#f0a500");
});
$(".tra1").mouseleave(function(){
    $(".tra1 ul li a").css("color","#252a34");
});

$(".tra2").mouseenter(function(){
    $(".tra2 ul li a").css("color","#f0a500");
});
$(".tra2").mouseleave(function(){
    $(".tra2 ul li a").css("color","#252a34");
});

$(".tra3").mouseenter(function(){
    $(".tra3 ul li a").css("color","#f0a500");
});
$(".tra3").mouseleave(function(){
    $(".tra3 ul li a").css("color","#252a34");
});

