function loadStart(){
    var height = $(window).height(); 
    $(".wrapper").height(height).show();
    $(".loading-sign").show();
}
function loadEnd(){
    $(".wrapper").fadeOut(1000);
    $(".loading-sign").fadeOut(700);  
}