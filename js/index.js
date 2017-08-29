$(function() {
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播 
    $('.mynav').on('click',function(e) {
        var a = e.target;
        $(a).parent('li').addClass('active').siblings('li').removeClass('active'); 
    });
    $('.mynav').on('click',function(e){
         
        switch (e.target.id) {
            case 'to-home':
                $('iframe').attr('src','page/home.html');
                $('.container ol li a').text('首页');
                break;
            case 'to-download':
                $('iframe').attr('src','page/download.html');
                $('.container ol li a').text('资源下载');
                break;
            case 'to-register':
                $('iframe').attr('src','page/register.html');
                $('.container ol li a').text('会员注册');
                break;
            case 'to-advice':
                $('iframe').attr('src','page/advice.html');
                $('.container ol li a').text('建言献策');
            break;
            case 'to-operation':
                $('iframe').attr('src','page/operation.html');
                $('.container ol li a').text('芝麻开门');
            break;
            default:
                break;
        
        }
    });
});
    
   
