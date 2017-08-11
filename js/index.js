$(function() { 
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播 
    
    $(".headerdiv ul").on("click",function(e){
         
        switch (e.target.id) {
            case "to-home":
                $(".container").children(".home")
                    .removeClass("hide").siblings().addClass("hide");
                break;
            case "to-download":
                $(".container").children(".download")
                    .removeClass("hide").siblings().addClass("hide");
                break;
            case "to-register":
                $(".container").children(".register")
                    .removeClass("hide").siblings().addClass("hide");
                break;
            default:
                break;
        
        }
    });    
});

