function command() {

}
command.prototype.captureCommand = function(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    this.analizeCommand($("#line").val());
  }
}
//eqx(((e^-x)-x), s)
command.prototype.analizeCommand = function(command) {
  var shower1 = new shower();

  if (command.includes("help")) {
    shower1.showHelp();
  } else if (command.includes("clean")) {
    shower1.clean();
  } else if (command.includes("chgclr")) {
    if (command.includes(")") && command.includes("(")) {
      var color = command.substr(7, command.length);
      shower1.chgclr(color.replace(")", ""));
    } else {
      shower1.show(command, "Command not found)")
      shower1.showHelp();
    }
  } else {
    var analizer1 = new analizer(command);
    analizer1.analizeCommand();
    if (analizer1.response == "Command not found") {
      shower1.show(command, analizer1.response);
      shower1.showHelp();
    } else if (analizer1.response == "Something is wrong") {
      shower1.show(command, analizer1.response);
      shower1.showHelp();
    } else {
      shower1.show(command, analizer1.response);
    }

  }
  /*


    if (command.includes(")") && command.includes("(")) {
      var cando = command.split("(");
      cando[1] = cando[1].substr(0, (cando[1].length-1));
      command = cando[0]
      if (cando[1].includes(",")) {
        var orders = cando[1].split(",");
      }
    }


    switch (command) {
      case "help":
      shower1.show("Call 911");
      break;
      case "clean":
      shower1.clean();
      break;
      case "chgclr":
      shower1.chgclr(cando[1]);
      break;
      default:

    }
  */
}

var command = new command();
//command.analizeCommand("");
