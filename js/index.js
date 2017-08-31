$(function() {
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播 

    // 首页导航
    $('.mynav').on('click',function(e) {
        var a = e.target;
        $(a).parent('li').addClass('active').siblings('li').removeClass('active'); 
    });
    
    // 板块切换
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

    //点击登录按钮
    $('#login-btn').on('click',function(e) {
        console.log("kasdakjd");
        var username = $('#inputAccount').val();
        var password = $('#inputPassword').val();
        
        if(account != '' && password != ''){
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                    username: username,
                    password:password
                },
                async:false,
                dataType: 'json',
                timeout:3000, //超时时间
                success: function(result) {
                    $("b").remove(); 
                    $("<b style='color:red;margin-left:55px;'>登录成功</b>").insertAfter("#password-form");
                },
                fail:function (err) {
                    
                }
            });
        }else{
            $("b").remove(); 
            $("<b style='color:red;margin-left:55px;'>账户或密码不能为空</b>").insertAfter("#password-form");
        }
    });
    
});
    
   
