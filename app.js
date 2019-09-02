var express = require("express");
var http = require("http");
var app = express();
var logger = require("morgan");

app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(3000, function() {
      console.log("Application started on port 3000!");
})


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });
});
