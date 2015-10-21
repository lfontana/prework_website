  
$(document).ready(function(){
    $(".mybutton").click(function(){
        $(this).siblings(".picdiv").slideToggle("slow");
    });
});
