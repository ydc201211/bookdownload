$(function() {
    $('.mytabs').on('click',function(e) {
        var a = e.target;
        $(a).parent('li').addClass('active').siblings('li').removeClass('active'); 
        
        switch (e.target.id) {
            case "book-content":
             
                $('.box').children().eq(0).removeClass('hide').siblings('div').addClass('hide');
                break;
            case "book-form":
                $('.box').children().eq(1).removeClass('hide').siblings('div').addClass('hide');
                break;
            case "book-author":
                $('.box').children().eq(2).removeClass('hide').siblings('div').addClass('hide');
                break;
           
            default:
                break;
        }
    });

  
});