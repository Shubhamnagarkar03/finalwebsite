//social links effects

//social links effects
$(document).ready(function(){
  $(".bi-instagram").mouseover(function(){
    $("body").addClass('instaback');
    $("#change").text("INSTAGRAM");
  });
  $(".bi-instagram").mouseout(function(){
    $("body").removeClass('instaback');
    $("#change").text("Reach me")
  });
})

$(document).ready(function(){
  $(".bi-linkedin").mouseover(function(){
    $("body").addClass('linkedinback');
    $("#change").text("LINKEDIN");
  });
  $(".bi-linkedin").mouseout(function(){
    $("body").removeClass('linkedinback');
    $("#change").text("Reach me")
  });
})

$(document).ready(function(){
  $(".bi-twitter").mouseover(function(){
    $("body").addClass('twitterback');
    $("#change").text("TWITTER");
  });
  $(".bi-twitter").mouseout(function(){
    $("body").removeClass('twitterback');
    $("#change").text("Reach me")
  });
})

$(document).ready(function(){
  $(".bi-github").mouseover(function(){
    $("body").addClass('gitback');
    $("#change").text("GITHUB");
  });
  $(".bi-github").mouseout(function(){
    $("body").removeClass('gitback');
    $("#change").text("Reach me")
  });
})

$(document).ready(function () {
  $("#hirebtn").click(function () {
    alert("Please fill your deatils in the furthur mailbox and send me, or send a 'Hi' to initiate");
  })
})
