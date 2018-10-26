$(function () { 
    mui('.my-footer').on('tap','a',function(){
        window.top.location.href=this.href;
    });
    // $('.my-footer').on('click','a',function () { 
    //     $(this).addClass('active').siblings().removeClass('active');
    //  })
 })