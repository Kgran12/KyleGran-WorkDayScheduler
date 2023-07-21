// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// The following code will display today's date and time.


$(document).ready(function () {


setInterval(function(){
    $('#time').text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')); 
}, 1000);



  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  function trackTime(){
    var currentTime = dayjs().hour();

    $(".time-block").each(function(){
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      if (blockTime < currentTime){
        $(this).addClass("past");
      } else if (blockTime === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      } 
    })

  
  }

  $("#hour-9 .description").val(localStorage.getItem("hour-8"));
  $("#hour-10 .description").val(localStorage.getItem("hour-9"));
  $("#hour-11 .description").val(localStorage.getItem("hour-10"));
  $("#hour-12 .description").val(localStorage.getItem("hour-11"));
  $("#hour-13 .description").val(localStorage.getItem("hour-12"));
  $("#hour-14 .description").val(localStorage.getItem("hour-1"));
  $("#hour-15 .description").val(localStorage.getItem("hour-2"));
  $("#hour-16 .description").val(localStorage.getItem("hour-3"));
  $("#hour-17 .description").val(localStorage.getItem("hour-4"));
  $("#hour-18 .description").val(localStorage.getItem("hour-5"));

  trackTime();
});




