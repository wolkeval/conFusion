$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carousel-button").click(function () {
    // Identifies whether it is a play or a pause button
    if ($("#carousel-button").children("span").hasClass("fa-pause")) {
      // If the span inside #carouselButton has the class fa-pause
      $("#mycarousel").carousel("pause"); // Pause the cycle
      $("#carousel-button").children("span").removeClass("fa-pause"); // Remove the fa-pause class
      $("#carousel-button").children("span").addClass("fa-play"); // Add the fa-play class
    } else {
      $("#mycarousel").carousel("cycle"); // Resume the cycle
      $("#carousel-button").children("span").removeClass("fa-play");
      $("#carousel-button").children("span").addClass("fa-pause");
    }
  });

  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });

  $("#reserveButton").click(function () {
    $("#reserveModal").modal("show");
  });
});
