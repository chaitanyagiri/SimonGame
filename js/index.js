$(document).ready(function() {
  var audioOne = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    audioTwo = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    audioThree = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    audioFour = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  var arr = [],
    streak = 1,
    x = 0,
    user = [],
    strict = false;
  var obj = {
    1: ".one",
    2: ".two",
    3: ".three",
    4: ".four"
  };
  function chamku() {
    var i = 0;
    
    arr.forEach(function(item){
      
      
      $(obj[item]).css('opacity','1');
      switch (item) {
        case 1:
            
            (function(item,i){
           
            setTimeout(function() {
              audioOne.play();
            $(obj[item]).css('opacity','0.5');  
            setTimeout(function() {
             $(obj[item]).css('opacity','1'); 
              }, 800); 
            }, 1000*i);
              
            })(item,i+1);
          break;
        case 2:
           
            (function(item,i){
           
            setTimeout(function() {
              audioTwo.play();
              $(obj[item]).css('opacity','0.5');
             setTimeout(function() {
             $(obj[item]).css('opacity','1'); 
              }, 800);
            }, 1000*i);
              
          })(item,i+1);
          break;
        case 3:
              
            (function(item,i){
            
            setTimeout(function() {
              audioThree.play();
             $(obj[item]).css('opacity','0.5');  
              setTimeout(function() {
             $(obj[item]).css('opacity','1'); 
              }, 800);   
            }, 1000*i);
              
            })(item,i+1);
          break;
        case 4:
             
            (function(item,i){
            
            setTimeout(function() {
              audioFour.play();
             $(obj[item]).css('opacity','0.5'); 
             setTimeout(function() {
               $(obj[item]).css('opacity','1');
             }, 800); 
            }, 1000*i);   
            })(item,i+1);
          break;
      }
      i++;
    });
    }
  $(".strict").click(function(){
    if(strict==false){
      $(".strict").removeClass("btn-info");
      $(".strict").addClass("btn-danger");
      strict = true;
    }
    else{
      $(".strict").removeClass("btn-danger");
      $(".strict").addClass("btn-info");
      strict = false;
    }
  });
  function restart(){
    arr = []; streak = 1; x = 0,user = [];
    for (var i = 0; i < streak; i++) {
      arr.push(Math.floor(Math.random() * 4) + 1);
    }
    $(".count").html("00");
    chamku();
  } 
  $(".restart").click(function() {
    restart();
  });
  $(".one").click(function() {
    setTimeout(function() {
               audioOne.play();
             }, 200);
  });
  $(".two").click(function() {
    setTimeout(function() {
               audioTwo.play();
             }, 200);
  });
  $(".three").click(function() {
    setTimeout(function() {
               audioThree.play();
             }, 200);
  });
  $(".four").click(function() {
    setTimeout(function() {
               audioFour.play();
             }, 100);
  });
  function validate(){
    x = 0;
    for(var i = 0;i<arr.length;i++){
      if(user[i]==arr[i]){
        x++;
      }
    }
    if(x==arr.length){
     $(".count").html(x);
     if(x==20){
       setTimeout(function(){
        $(".simon").html("You Won!");
        setTimeout(function(){
          $(".simon").html("Simon");
        },1000);
      },1000);
       restart();
     } else{
     arr.push(Math.floor(Math.random() * 4) + 1);
      console.log(arr);
      chamku(); 
     }
    }
    else{
      if(strict == false){
        setTimeout(function(){
          $(".simon").html("Try Again!");
          setTimeout(function(){
            $(".simon").html("Simon");
          },1000);
        },1000);
        chamku();
      }
      else{
        setTimeout(function(){
          $(".simon").html("Try Again!");
          setTimeout(function(){
            $(".simon").html("Simon");
          },1000);
        },1000);
        restart();
      }
    }
    user = [];  
  }
  $(".game").click(function() {
    var curr = parseInt($(this).attr("value"));
    user.push(curr);
    console.log(user);
    console.log(arr);
    if(user.length == arr.length){
      validate();
    }
  });
});