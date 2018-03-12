function shower(){


}

shower.prototype.show = function(command, response){
  $("#response").append("<p>"+command + " --> " + response + "<p>");
  $("#line").val("");
}

shower.prototype.clean = function(){
  $("#response").html("");
  $("#line").val("");
}

shower.prototype.chgclr = function(color){
  console.log(color);
  $("#response").css('color', color);
  $("#response").append("<p> Color changed: "+ color  +" <p>");
  $("#line").val("");
}

shower.prototype.showHelp = function(){
  $("#response").append("<p>These are your options:</p>");
  $("#response").append("To clean the screen \ntype 'clean'");
  $("#response").append("<p>To change color type 'chgclr(color)'. Example: chgclr(blue)</p>");
  $("#response").append("<p>To eval a ecuation type 'eqx(ecuation, x, delta [OPTIONAL])'</p>");
  $("#response").append("<p>Example 1: eqx(((e^-x)-x), 1, 0.1)</p>");
  $("#response").append("<p>Example 2: eqx((5*(x^2) - (3^x)), 1)</p>");
  $("#response").append("<p>By default delta is 0.01 </p>");
  $("#line").val("");
}
