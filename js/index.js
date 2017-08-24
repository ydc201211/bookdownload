$(function() {
   

   
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播 
    $('.mynav').on('click',function(e) {
        var a = e.target;
        console.log($(a).parent('li').addClass('active').siblings('li'));
        $(a).parent('li').addClass('active').siblings('li').removeClass('active'); 
    });
    $('.mynav').on('click',function(e){
         
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

    setIframeHeight(document.getElementById('childFrame'));
});

function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
}
    
   
