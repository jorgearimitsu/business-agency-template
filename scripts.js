$(document).ready(function() {
  (function($){
    var form = $("#analysis-form");

    $(".arrow-down-btn").click(function(e){
      e.preventDefault();
      form.slideToggle();
    });

    $(".close-btn").click(function(e){
      e.preventDefault();
      form.slideUp();
    });
  })(jQuery);
});


