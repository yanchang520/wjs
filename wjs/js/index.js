

$(function () {
    $(window).on('resize',function () {
        //判断屏幕尺寸
        if($(window).width()>=768){
            console.log(111)
            $('.carousel-inner .item').each(function (index,value) {
                console.log($(value));
               var imgSrc = $(value).data('largeImages');
                //var imgSrc =$(value).attr('data-large-images')
              //  console.log(imgSrc);
               
               var itemCreat =$(value).html($("<a href='javascript:;' class='pcImg'></a>").css("backgroundImage","url('"+imgSrc+"')"));
              
              
          //  $(value).html('<a href="javascript:;" class="pcImg"></a>').css("")
             //  $(value).html($('<a href="javascript:;" class="pcImg"></a>').css("background","url('"+imgSrc+"')"));
            })
        }else{
            $('.carousel-inner .item').each(function (index,value) {
                var imgSrc1 = $(value).data('smallImages');
                var itemCreat1 =$(value).html("<a href='javascript:;' class='mobileImg'><img src='"+imgSrc1+"'> </a>");
                console.log(itemCreat1);
                
            })
        }
    }).trigger('resize');
    //添加移动端的滑动操作；
    var startX, endX;
    $('.carousel-inner')[0].addEventListener('touchstart',function (e) {
        startX = e.targetTouches[0].clientX;
    });
    $('.carousel-inner')[0].addEventListener('touchend',function (e) {
         endX = e.changedTouches[0].clientX;
        distanceX = endX - startX;
        if(distanceX > 0){
            //上一张
            $(".carousel").carousel('prev');
        }else{
            //下一张
            $(".carousel").carousel('next');
        }
    })
     
})