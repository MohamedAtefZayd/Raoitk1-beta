/*var elemt = document.getElementsByClassName("element");
var back = document.getElementsByClassName("back");

$(elemt).mouseenter(function (){
  $(this).addClass("show");
  }, function (){
  $(back).addClass("show");
  }, function(){
  $(back).attr("data-bs-popper", "none");}, function (){
  $(this).attr("aria-expanded", "true");
});

$(back).mouseleave(function (){
  $(this).removeClass("show");
  }, function (){
  $(back).removeClass("show");
  }, function(){
  $(back).attr("data-bs-popper", "")}, function (){
  $(this).attr("aria-expanded", "false");
});
*/
var elemt = document.getElementsByClassName("fa-microphone");
var text = document.getElementsByClassName("search");
var old = $(text).text();
var or = document.getElementsByClassName("or");
var btn = document.getElementsByClassName("button-bais");
var pag = document.getElementsByClassName("pagn");
var con = document.getElementsByClassName("content");
var fot = document.getElementsByTagName("footer");
var sec = document.getElementsByClassName("sec");
var send = document.getElementsByClassName("send");
var ms = document.getElementsByClassName("text");
$(elemt).click(function(){
  $(text).text("عذرا ! سوف تتوفر الخدمه قربيا");
    //$(text).text(old).delay("10000")
    $(or).css("display","block");
});



$(btn).click(function(){
  $(con).css("display","block");
    $(pag).css("display","block");
    $(btn).css("display","none");
    $(fot).css("display","block");
    
});
$(sec).click(function(){
    $(fot).css("display","block");
    
});
$(send).click(function(){
    $(send).css("display","none");
    $(ms).css("pointer-events","none");
    $(ms).text("لقد تم ارسال تعليقك بنجاح");

    
    
    
});