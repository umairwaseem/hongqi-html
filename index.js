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

    var loader = initLoading(document.getElementById('loader'));

    loader.setP(100);

})