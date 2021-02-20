
$(document).ready(function() {
    $('.car-color').click(function() {

        var image = $(this).data().img;

        console.log(image);

        $('.selected-car1').fadeOut(250, function() {
            $('.selected-car1').attr('src', 'assets/h5/' + image);
        });

        $('.selected-car1').fadeIn(1000);
    })

    var jsHeight = document.documentElement.clientHeight;
    console.log(jsHeight);

    $(window)
    .resize(function () {
      window.WINDOW_WIDTH = $(window).width();
      window.WINDOW_HEIGHT = $(window).height();
      window.ISWAP = window.WINDOW_WIDTH < 750;
      window.isWAP768 = window.WINDOW_WIDTH <= 768;
      
      if (!window.isWAP768) {
        var imgSize = $(window).width() / 1920;
        $("#loading-wrap").css({
          transform: "scale(" + imgSize + ")",
          "transform-origin": " 0 0",
          height: $(window).height() + 1080 * imgSize,
        });
      } else {
        var imgSize = $(window).height() / 1080;
        $("#loading-wrap").css({
          transform: "scale(" + imgSize + ") translateX(-50%)",
          "transform-origin": " 0 0",
        });
      }
    })
    .resize();

    var loader = initLoading(document.getElementById('loader'));
    //var cars = initLoading(document.getElementById('cars'));

    loader.setP(100);

    loader.addEventListener("onAniEvt2",function() {
        $('body').removeClass('overflow');
        $('section, header').css('opacity', '1');
        $('#loading-wrap > img').fadeOut(1000, function(){
          loader.playCarAni();
        });
    });

    

    

})