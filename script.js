let num = 0;

$(".submit").click(function() {
  let count = $(".userInput1").val();
  let self = $(".userInput2").val();
  if(self === "Selfish"){
    $(".Gothel").show();
    $(".Flynn").hide();
    $(".Rapunzel").hide();
    $(".Pascal").hide();

  } else if (count >= 4 && count<=6 && self === "Selfless"){
    $(".Flynn").show();
    $(".Gothel").hide();
    $(".Rapunzel").hide();
    $(".Pascal").hide();
  } else if (count > 7 && self === "Selfless"){
    $(".Rapunzel").show();
    $(".Flynn").hide();
    $(".Gothel").hide();
    $(".Pascal").hide();
  } else if (count <= 7 && self === "Selfless"){
    $(".Pascal").show();
    $(".Flynn").hide();
    $(".Rapunzel").hide();
    $(".Gothel").hide();
  }
  num++; // adds 1 to num
  $(".counter").text("Number of times quiz was taken: " + num); // output: 
  });


// let num = 0;
// num++; // adds 1 to num
// console.log(num); // output: 1
  // if(user1 === 5 && user2 === "Selfish"){
  //   $(".Gothel").show();
  // } else if (user1 === 5 && user2 === "Selfless"){
  //   $(".Flynn").show();
  // }

// num++; // adds 1 to num
// console.log(num); // output: 