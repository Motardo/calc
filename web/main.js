var calc = require("../calc.js");

function updateOutput(arr) {
  var len = arr.length;
  if (len > 2) {    
    $("#output3").show();
    $("#eq3").text(arr[2][0]);
    $("#res3").text(arr[2][1]);
  } else {
     $("#output3").hide();
  }
  if (len > 1) {
    $("#output2").show();
    $("#eq2").text(arr[1][0]);
    $("#res2").text(arr[1][1]);
  } else {
     $("#output2").hide();
  }
  if (len > 0) {
    $("#output1").show();
    $("#eq1").text(arr[0][0]);
    $("#res1").text(arr[0][1]);
  } else {
     $("#output1").hide();
  }
}

$(document).ready(function() {
  $("body").load( "body.html", function( response, status, xhr ) {
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    } else {
      var output = [];
      $("#clear").on("click", function(e) {
        e.preventDefault();
        $("#input").val("").focus();
        $("#msg").text("Cleared");
      });
      $("#enter").on("click", function(e) {
        e.preventDefault();
        var input = $("#input").val();
        var result = calc(input);
        $("#input").val(result);
        $("#msg").text("Ready");
        output.unshift([input,result]);
        updateOutput(output);
      });
      $("#back").on("click", function(e) {
        e.preventDefault();
        var eq = output.shift();
        $("#msg").text("Undid (" + eq[1] + ")");
        $("#input").val(eq[0]).focus();
        updateOutput(output);
      });
      $("#output3").hide();
      $("#output2").hide();
      $("#output1").hide();
      $("#msg").text("Ready");
      $("#input").focus();
    }
  });
});
