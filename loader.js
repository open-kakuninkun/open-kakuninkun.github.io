function loadStart(){
    var height = $(window).height(); 
    $(".wrapper").height(height).show();
    $(".loading-sign").show();
    $("#kakuninkun-logo").show();
    $("#spinner").show();
}
function loadEnd(){
    $(".wrapper").fadeOut(1000);
    $(".loading-sign").fadeOut(700);
    $("#kakuninkun-logo").fadeOut(700); 
    $("#spinner").fadeOut(700); 
}