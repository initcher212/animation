  $(document).ready(function(){
    
    // вперед
    $("#go").click(function(){
      $(".block").animate({left: '94%'}, 2000);
      
    });

    // стоп
    $("#stop").click(function(){
      $(".block").stop();
    });

    // вернуть
    $("#back").click(function(){
      $(".block").animate({left: '0%'}, 2000);
    });

  });
var rotation = function (){
   jQuery("#rotateImg").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
}
rotation();