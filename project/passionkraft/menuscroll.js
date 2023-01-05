$(document).ready(function () {
    $header = $(".header-nav")
    $(window).scroll(function (event) {
        $currentval = $(this).scrolltop();
        if ($current > 0) {
            $headers.addclass("menu-fixed");
        } else {
            $headers.removeclass("menu-fixed")
        }
    })
})