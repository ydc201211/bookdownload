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
});

function iframeResize() {
    console.log("jjjdd");
     //alert(this.document.body.scrollHeight); //弹出当前页面的高度  
    var obj = parent.document.getElementById("childFrame");  //取得父页面IFrame对象  
    //alert(obj.height); //弹出父页面中IFrame中设置的高度  
    obj.height = this.document.body.scrollHeight;  //调整父页面中IFrame的高度为此页面的高度  
}

