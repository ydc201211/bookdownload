$(function() { 
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播 
    
    $(".headerdiv ul").on("click",function(e){
         
        switch (e.target.id) {
            case "to-home":
                $("iframe").attr("src","page/home.html");
                break;
            case "to-download":
                $("iframe").attr("src","page/download.html");
                break;
            case "to-register":
                $("iframe").attr("src","page/register.html");
                break;
            case "to-advice":
                $("iframe").attr("src","page/advice.html");
            break;
            case "to-operation":
                $("iframe").attr("src","page/operation.html");
            break;
            default:
                break;
        
        }
    });    
});

