// var pingPongGame = function(inputNumber){
//   if ((inputNum % 3 === 0) || (inputNum % 5 === 0) || (inputNum % 15 === 0)) {
//     return true;
//   }  else {
//     return false;
//   }
// };
//----old script above--------//

var PingPongGame = function(inputNum){

  for (var i = 1; i <= inputNum; i += 1) {
    if (i % 15 === 0){
      $("ul").append("<li>pingpong</li>");
    }
    else if (i % 3 === 0){
      $("ul").append("<li>ping</li>");
    }
    else if (i % 5 === 0){
      $("ul").append("<li>pong</li>");
    }
    else {
      $("ul").append("<li>" + i + "</li>");
    }
  };
};

$(document).ready(function(){
  $("#pingpong form").submit(function(event){
    var inputNum= parseInt($("input#input1").val());
    var result = PingPongGame(inputNum);

    event.preventDefault();

  });
});
