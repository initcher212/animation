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
